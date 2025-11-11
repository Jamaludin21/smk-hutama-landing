import { Modal, notification, Upload } from "antd";
import axios from "axios";

export const generateFilters = (dataIndex, data) => {
  const uniqueValues = Array.from(new Set(data.map((item) => item[dataIndex])));
  return uniqueValues.map((val) => ({
    text: val,
    value: val,
  }));
};

export const getSorter = (type, dataIndex) => {
  switch (type) {
    case "string":
      return (a, b) => {
        const valA = a[dataIndex];
        const valB = b[dataIndex];
        const strA = typeof valA === "string" ? valA : valA?.name || "";
        const strB = typeof valB === "string" ? valB : valB?.name || "";
        return strA.localeCompare(strB);
      };
    case "number":
      return (a, b) => a[dataIndex] - b[dataIndex];
    case "date":
      return (a, b) => new Date(a[dataIndex]) - new Date(b[dataIndex]);
    default:
      return null;
  }
};

export const camelText = (text) => {
  if (!text) return "";
  const cleaned = text.replace(/_/g, "-").toLowerCase();
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value || 0);

export const formatDateTime = (date) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

export const handleFormChange = ({
  form,
  setFormValid,
  editState,
  isImageValid = true,
}) => {
  const hasErrors = form
    .getFieldsError()
    .some(({ errors }) => errors.length > 0);

  const values = form.getFieldsValue();
  const allFilled = Object.values(values).every(
    (val) => val !== undefined && val !== ""
  );

  const newValid =
    ((!hasErrors && allFilled && isImageValid) || (editState && !hasErrors)) ??
    false;

  setFormValid((prev) => (prev !== newValid ? newValid : prev));
};

export const validateUploadImage = (file, setIsImageValid) => {
  const isAllowedType =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  const isLt1MB = file.size / 1024 / 1024 < 1;

  if (!isAllowedType) {
    Modal.error({
      title: "File tidak valid",
      content: "Hanya file JPG, JPEG, atau PNG yang diperbolehkan.",
      centered: true,
    });
    setIsImageValid(false);
    return Upload.LIST_IGNORE;
  }

  if (!isLt1MB) {
    Modal.error({
      title: "Ukuran file terlalu besar",
      content: "Ukuran gambar tidak boleh lebih dari 1MB.",
      centered: true,
    });
    setIsImageValid(false);
    return Upload.LIST_IGNORE;
  }

  setIsImageValid(true);
  return true;
};

// Function Handling API
export const logout = async () => {
  const res = await fetch("/api/auth/logout", { method: "POST" });
  const data = await res.json();
  if (res.ok) {
    window.location.href = "/login";
  } else {
    console.error(data.error);
  }
};

export async function uploadToVercelBlob(file, folder = "misc") {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const res = await fetch("/api/blob/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");

  const data = await res.json();
  return data.url; // your Vercel Blob public URL
}

export async function deleteVercelBlob(fileUrl) {
  const res = await fetch("/api/blob/delete", {
    method: "POST",
    body: JSON.stringify({ url: fileUrl }),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error || "Delete failed");
  }

  return true;
}

export const globalSubmit = async ({
  form,
  propsValue = {},
  propsState = {},
  propsHandle = {},
}) => {
  const {
    setLoadingFetch,
    setEditState,
    setOpenModal,
    setLoadingTable,
    router,
  } = propsState;

  const {
    editState,
    apiUri,
    editData,
    messageApi,
    gradePage = false,
    selectedSiswa = null,
  } = propsValue;

  const { refreshGrading } = propsHandle;

  const values = await form.getFieldsValue();
  const uploadFieldKey = values.fileUrl
    ? "fileUrl"
    : values.avatar
    ? "avatar"
    : null;
  const fileList = values[uploadFieldKey] || [];
  const file = fileList?.[0];
  let fileUrl = file?.url || null;

  setLoadingFetch(true);
  messageApi.open({ type: "loading", content: "Processing submit..." });

  try {
    // ⏳ If user selected a new file
    if (file?.originFileObj) {
      // 🗑️ Delete old image from Vercel Blob (if any)
      if (editState && editData?.[uploadFieldKey]) {
        try {
          await deleteVercelBlob(editData[uploadFieldKey]);
        } catch (err) {
          console.warn("Failed to delete old blob:", err.message);
          notification.error({
            message: err || `Failed to delete old blob`,
          });
        }
      }

      // 📤 Upload new image
      fileUrl = await uploadToVercelBlob(file.originFileObj, apiUri);
    }

    // 📝 Final payload with latest fileUrl
    const payload = {
      ...values,
      ...(values?.tanggal && {
        tanggal: values.tanggal.toDate(),
      }),
      ...(selectedSiswa && {
        siswaId: selectedSiswa?.key || selectedSiswa?.id,
      }),
      ...(editState &&
        apiUri === "ecommerce" && { pemilikId: editData?.pemilikId }),
      ...(uploadFieldKey && { [uploadFieldKey]: fileUrl }),
    };

    if (editState) {
      await axios.put(
        `/api/${apiUri}/${editData?.key || editData?.id}`,
        payload
      );
    } else {
      await axios.post(`/api/${apiUri}`, payload);
    }

    notification.success({
      message: editState
        ? `${camelText(apiUri)} berhasil diubah!`
        : `${camelText(apiUri)} berhasil dibuat! ${
            apiUri == "pendaftaran" ? "Mohon menunggu validasi dari admin" : ""
          }`,
    });

    form.resetFields();
    setOpenModal && setOpenModal(false);
    setEditState && setEditState(false);
    !gradePage && setLoadingTable && setLoadingTable(true);
    router && router.refresh();
  } catch (error) {
    console.error(error);
    notification.error({ message: "Gagal menyimpan data!" });
  } finally {
    messageApi.destroy();
    setLoadingFetch(false);
    gradePage &&
      refreshGrading &&
      (await refreshGrading(undefined, undefined, selectedSiswa));
    !gradePage &&
      setLoadingTable &&
      setTimeout(() => setLoadingTable(false), 500);
  }
};

export const globalDelete = async ({
  record,
  router,
  apiUri,
  messageApi,
  setLoadingTable = false,
  setLoadingFetch = false,
  gradePage = false,
  selectedSiswa = null,
  refreshGrading,
  blobFields = ["fileUrl", "avatar"],
}) => {
  messageApi.open({
    type: "loading",
    content: "Processing delete...",
  });
  setLoadingFetch && setLoadingFetch(true);
  try {
    for (const field of blobFields) {
      const blobUrl = record?.[field];
      if (blobUrl) {
        try {
          await deleteVercelBlob(blobUrl);
        } catch (err) {
          console.warn(`Failed to delete ${field} blob:`, err.message);
          notification.error({
            message: err || `Failed to delete ${field} blob`,
          });
        }
      }
    }

    await axios.delete(`/api/${apiUri}/${record.key || record.id}`);
    notification.success({ message: `${camelText(apiUri)} deleted!` });
    router.refresh();
    setLoadingTable && setLoadingTable(true);
  } catch (err) {
    notification.error({ message: err || "Delete failed" });
    console.log(err);
  } finally {
    messageApi.destroy();
    gradePage &&
      refreshGrading &&
      (await refreshGrading(undefined, undefined, selectedSiswa));
    setLoadingFetch && setLoadingFetch(false);
    setLoadingTable && setTimeout(() => setLoadingTable(false), 500);
  }
};
