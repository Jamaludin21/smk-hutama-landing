import { Flex, Image, notification, Select, Spin, Tag, Typography } from "antd";
import {
  camelText,
  formatCurrency,
  formatDateTime,
  generateFilters,
  getSorter,
  globalDelete,
} from "./functionHelper";
import { classOptions, gradeLabelMap, roleColors } from "./dataHelper";
import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import { ButtonGeneric } from "@/components/button/buttonGeneric";
import { ModalConfirm } from "@/components/modal/genericModal";
import axios from "axios";
import dayjs from "dayjs";

dayjs.locale("id");

const placeHolderSpin = (
  <Flex justify="center" align="center">
    <Spin />
  </Flex>
);

// Column Setup
export const columnsSetup = ({
  data,
  columnsConfig,
  propsHandle = {},
  propsValue = {},
  propsState = {},
}) => {
  const role = propsValue?.session?.role || "";

  const processColumn = (col) => {
    // 🔒 Exclude if current role not allowed
    if (Array.isArray(col.roles) && !col.roles.includes(role)) {
      return null;
    }

    // Action column
    if (col.key === "action" && typeof col.render === "function") {
      return {
        ...col,
        fixed: "right",
        ...(Array.isArray(col.roles) &&
          !col.roles.includes(role) && {
            hidden: true,
          }),
        render: (_, record) =>
          col.render(record, propsHandle, propsValue, propsState),
      };
    }

    // Grouped column (with children) — recurse
    if (Array.isArray(col.children)) {
      return {
        ...col,
        align: "center", // center parent header
        title:
          typeof col.title === "string" ? (
            <div style={{ textAlign: "center" }}>{col.title}</div>
          ) : (
            col.title
          ),
        children: col.children.map(processColumn),
      };
    }

    // Date column
    if (col.type === "date" || col.type === "birthDate") {
      return {
        ...col,
        render: (value) =>
          value ? (
            col.type === "date" ? (
              formatDateTime(value)
            ) : (
              dayjs(value).format("D MMMM YYYY")
            )
          ) : (
            <Tag color="warning">Tanggal tidak tersedia</Tag>
          ),
      };
    }

    if (col.type === "clockIn" || col.type === "clockOut") {
      return {
        ...col,
        render: (_, record) => {
          const value = record[col.dataIndex];

          // Determine status key dynamically
          const statusKey = col.type === "clockIn" ? "statusIn" : "statusOut";
          const statusValue = record?.[statusKey];

          return (
            <Flex gap={12}>
              {value ? (
                formatDateTime(value)
              ) : (
                <Tag icon={<ClockCircleOutlined />}>
                  Belum melakukan absen{" "}
                  {statusKey === "statusIn" ? "masuk" : "keluar"}
                </Tag>
              )}
              {statusValue && (
                <Tag
                  icon={
                    statusValue === "late" || statusValue === "early" ? (
                      <ExclamationOutlined />
                    ) : (
                      <CheckOutlined />
                    )
                  }
                  color={
                    statusValue === "late" || statusValue === "early"
                      ? "warning"
                      : "success"
                  }
                >
                  {statusValue === "late"
                    ? "Terlambat"
                    : statusValue === "early"
                    ? "Lebih Awal"
                    : "Tepat Waktu"}
                </Tag>
              )}
            </Flex>
          );
        },
      };
    }

    // Image column
    if (col.type === "image") {
      return {
        ...col,
        render: (imageURL) =>
          imageURL ? (
            <Image
              src={imageURL}
              alt={col.title || "Image"}
              placeholder={placeHolderSpin}
            />
          ) : (
            <Image
              src="error"
              alt="Fault Image"
              fallback="data:image/png;base64,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"
            />
          ),
      };
    }

    // Grade column (including inside grouped columns)
    if (col.type === "grade") {
      return {
        ...col,
        align: "center",
        render: (value) => gradeLabelMap?.[value] || value,
      };
    }

    // Default columns (with filtering/sorting)
    return {
      ...col,
      filters: generateFilters(col.dataIndex, data),
      onFilter: (value, record) => record[col.dataIndex] === value,
      sorter: getSorter(col.type, col.dataIndex),
      sortDirections: ["ascend", "descend"],
      showSorterTooltip: { target: "full-header" },
    };
  };

  return columnsConfig.map(processColumn).filter(Boolean);
};

// Column Config
export const columnUsersConfig = [
  {
    key: "name",
    title: "Nama",
    dataIndex: "name",
    type: "string",
    fixed: "left",
  },
  {
    key: "avatar",
    title: "Avatar",
    dataIndex: "avatar",
    type: "image",
    width: 75,
    height: 75,
  },
  { key: "username", title: "Username", dataIndex: "username", type: "string" },
  { key: "email", title: "Email", dataIndex: "email", type: "string" },
  {
    key: "role",
    title: "Role",
    dataIndex: "role",
    type: "string",
    render: (role) => (
      <Tag color={roleColors[role] || "default"}>{camelText(role)}</Tag>
    ),
  },
  {
    key: "createdAt",
    title: "Dibuat pada",
    dataIndex: "createdAt",
    type: "date",
  },
  {
    key: "updatedAt",
    title: "Diubah pada",
    dataIndex: "updatedAt",
    type: "date",
  },
  {
    key: "lastLoginAt",
    title: "Login terbaru",
    dataIndex: "lastLoginAt",
    type: "date",
  },
  {
    key: "action",
    title: <Flex justify="center">Action</Flex>,
    fixed: "right",
    render: (
      record,
      { showModal },
      { session, apiUri, messageApi },
      { setEditState, setEditData, setLoadingTable, router }
    ) => (
      <Flex vertical justify="center" gap={8}>
        {(session.email === record.email || session.role === "ADMIN") && (
          <ButtonGeneric
            variant="solid"
            color="green"
            icon={<EditOutlined />}
            text="Ubah"
            onclick={async () => {
              setEditState(true);
              setEditData(record);
              showModal();
            }}
          />
        )}
        {session.role === "ADMIN" && (
          <ButtonGeneric
            variant="solid"
            color="red"
            icon={<DeleteOutlined />}
            text="Hapus"
            disable={session.email === record.email}
            onclick={() => {
              ModalConfirm({
                title: "Apa anda yakin?",
                content: `Menghapus data "${record.name}"?`,
                okText: "Ya",
                okButtonProps: { danger: true },
                cancelText: "Batal",
                onOk: async () =>
                  await globalDelete({
                    record,
                    router,
                    apiUri,
                    messageApi,
                    setLoadingTable,
                  }),
              });
            }}
          />
        )}
      </Flex>
    ),
  },
];

export const columnStudentsConfig = [
  {
    key: "nama",
    title: "Nama",
    dataIndex: "nama",
    type: "string",
    fixed: "left",
  },
  { key: "nis", title: "NIS", dataIndex: "nis", type: "string" },
  {
    key: "avatar",
    title: "Foto Siswa",
    dataIndex: "avatar",
    type: "image",
    width: 75,
    height: 75,
  },
  {
    key: "kelas",
    title: "Kelas",
    dataIndex: "kelas",
    type: "string",
    render: (kelas) => <Typography.Text>{camelText(kelas)}</Typography.Text>,
  },
  {
    key: "jenisKelamin",
    title: "Jenis Kelamin",
    dataIndex: "jenisKelamin",
    type: "string",
    render: (gender) => <Typography.Text>{camelText(gender)}</Typography.Text>,
  },

  {
    key: "alamat",
    title: "Alamat",
    dataIndex: "alamat",
    type: "string",
  },
  {
    key: "tempatTinggal",
    title: "Tempat Tinggal",
    dataIndex: "tempatTinggal",
    type: "string",
  },
  {
    key: "tanggalLahir",
    title: "Tanggal Lahir",
    dataIndex: "tanggalLahir",
    type: "birthDate",
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    fixed: "right",
    roles: ["ADMIN"],
    render: (
      record,
      { showModal },
      { apiUri, messageApi },
      { setEditState, setEditData, setLoadingTable, router }
    ) => (
      <Flex vertical justify="center" gap={8}>
        <ButtonGeneric
          variant="solid"
          color="green"
          icon={<EditOutlined />}
          text="Ubah"
          onclick={async () => {
            setEditState(true);
            setEditData(record);
            showModal();
          }}
        />
        <ButtonGeneric
          variant="solid"
          color="red"
          icon={<DeleteOutlined />}
          text="Hapus"
          onclick={() => {
            ModalConfirm({
              title: "Apa anda yakin?",
              content: `Menghapus data "${record.nama}"?`,
              okText: "Ya",
              okButtonProps: { danger: true },
              cancelText: "Batal",
              onOk: async () =>
                await globalDelete({
                  record,
                  router,
                  apiUri,
                  messageApi,
                  setLoadingTable,
                }),
            });
          }}
        />
      </Flex>
    ),
  },
];

export const columnKaryaConfig = [
  {
    key: "judul",
    title: "Judul",
    dataIndex: "judul",
    type: "string",
    fixed: "left",
  },
  { key: "slug", dataIndex: "slug", type: "string", hidden: true },

  {
    key: "fileUrl",
    title: "Gamber Karya",
    dataIndex: "fileUrl",
    type: "image",
    width: 100,
    height: 75,
  },
  {
    key: "pemilikId",
    dataIndex: "pemilikId",
    type: "string",
    hidden: true,
    customFn: (item) => item.pemilik?.id ?? null,
  },
  {
    key: "pemilikNama",
    title: "Pemilik Karya",
    dataIndex: "pemilikNama",
    customFn: (item) => item.pemilik?.nama ?? "-",
  },
  {
    key: "kelas",
    title: "Kelas",
    dataIndex: "kelas",
    type: "string",
    render: (kelas) => <Typography.Text>{camelText(kelas)}</Typography.Text>,
  },
  {
    key: "deskripsi",
    title: "Deskripsi",
    dataIndex: "deskripsi",
    type: "string",
    customFn: (item) => item.deskripsi ?? "-",
  },
  {
    key: "price",
    title: "Harga",
    dataIndex: "price",
    type: "string",
    render: (price) => formatCurrency(price),
  },
  {
    key: "createdBy",
    title: "Dibuat oleh",
    dataIndex: "createdBy",
    type: "string",
    customFn: (item) => item.createdBy?.name || item.createdById || "N/A",
  },
  {
    key: "createdAt",
    title: "Dibuat Pada",
    dataIndex: "createdAt",
    type: "date",
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    fixed: "right",
    width: 200,
    roles: ["TEACHER"],
    render: (
      record,
      { showModal },
      { apiUri, messageApi },
      { setEditState, setEditData, setLoadingTable, router }
    ) => (
      <Flex vertical justify="center" gap={8}>
        <ButtonGeneric
          variant="solid"
          color="green"
          icon={<EditOutlined />}
          text="Ubah"
          onclick={async () => {
            setEditState(true);
            setEditData(record);
            showModal();
          }}
        />
        <ButtonGeneric
          variant="solid"
          color="red"
          icon={<DeleteOutlined />}
          text="Hapus"
          onclick={() => {
            ModalConfirm({
              title: "Apa anda yakin?",
              content: `Menghapus data "${record.judul}"?`,
              okText: "Ya",
              okButtonProps: { danger: true },
              cancelText: "Batal",
              onOk: async () =>
                await globalDelete({
                  record,
                  router,
                  apiUri,
                  messageApi,
                  setLoadingTable,
                }),
            });
          }}
        />
      </Flex>
    ),
  },
];

export const columnGalleryConfig = [
  {
    key: "judul",
    title: "Judul",
    dataIndex: "judul",
    type: "string",
    fixed: "left",
    width: 300,
    height: 300,
  },
  {
    key: "fileUrl",
    title: "Gamber Galeri",
    dataIndex: "fileUrl",
    type: "image",
    width: 100,
    height: 75,
  },
  {
    key: "deskripsi",
    title: "Deskripsi",
    dataIndex: "deskripsi",
    type: "string",
  },
  {
    key: "createdBy",
    title: "Dibuat oleh",
    dataIndex: "createdBy",
    type: "string",
    width: 150,
    height: 150,
    customFn: (item) => item.createdBy?.name || item.createdById || "N/A",
  },
  {
    key: "createdAt",
    title: "Dibuat Pada",
    dataIndex: "createdAt",
    type: "date",
    width: 150,
    height: 150,
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    fixed: "right",
    width: 200,
    render: (
      record,
      { showModal },
      { apiUri, messageApi },
      { setEditState, setEditData, setLoadingTable, router }
    ) => (
      <Flex vertical justify="center" gap={8}>
        <ButtonGeneric
          variant="solid"
          color="green"
          icon={<EditOutlined />}
          text="Ubah"
          onclick={async () => {
            setEditState(true);
            setEditData(record);
            showModal();
          }}
        />
        <ButtonGeneric
          variant="solid"
          color="red"
          icon={<DeleteOutlined />}
          text="Hapus"
          onclick={() => {
            ModalConfirm({
              title: "Apa anda yakin?",
              content: `Menghapus data "${record.judul}"?`,
              okText: "Ya",
              okButtonProps: { danger: true },
              cancelText: "Batal",
              onOk: async () =>
                await globalDelete({
                  record,
                  router,
                  apiUri,
                  messageApi,
                  setLoadingTable,
                }),
            });
          }}
        />
      </Flex>
    ),
  },
];

export const columnProgramConfig = [
  {
    key: "judul",
    title: "Judul",
    dataIndex: "judul",
    type: "string",
    fixed: "left",
    width: 300,
    height: 300,
  },
  {
    key: "fileUrl",
    title: "Gamber Agenda",
    dataIndex: "fileUrl",
    type: "image",
    width: 100,
    height: 75,
  },
  {
    key: "deskripsi",
    title: "Deskripsi",
    dataIndex: "deskripsi",
    type: "string",
  },
  {
    key: "createdBy",
    title: "Dibuat oleh",
    dataIndex: "createdBy",
    type: "string",
    width: 150,
    height: 150,
    customFn: (item) => item.createdBy?.name || item.createdById || "N/A",
  },
  {
    key: "createdAt",
    title: "Dibuat Pada",
    dataIndex: "createdAt",
    type: "date",
    width: 150,
    height: 150,
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    fixed: "right",
    width: 200,
    render: (
      record,
      { showModal },
      { apiUri, messageApi },
      { setEditState, setEditData, setLoadingTable, router }
    ) => (
      <Flex vertical justify="center" gap={8}>
        <ButtonGeneric
          variant="solid"
          color="green"
          icon={<EditOutlined />}
          text="Ubah"
          onclick={async () => {
            setEditState(true);
            setEditData(record);
            showModal();
          }}
        />
        <ButtonGeneric
          variant="solid"
          color="red"
          icon={<DeleteOutlined />}
          text="Hapus"
          onclick={() => {
            ModalConfirm({
              title: "Apa anda yakin?",
              content: `Menghapus data "${record.judul}"?`,
              okText: "Ya",
              okButtonProps: { danger: true },
              cancelText: "Batal",
              onOk: async () =>
                await globalDelete({
                  record,
                  router,
                  apiUri,
                  messageApi,
                  setLoadingTable,
                }),
            });
          }}
        />
      </Flex>
    ),
  },
];

export const columnRegistrationConfig = [
  {
    key: "namaSiswa",
    title: "Nama Siswa",
    dataIndex: "namaSiswa",
    type: "string",
    fixed: "left",
  },
  {
    key: "isApproved",
    title: "Status Pendaftaran",
    dataIndex: "isApproved",
    type: "string",
    render: (status) => (
      <Tag color={status ? "success" : "warning"}>
        {status ? "Tervalidasi" : "Perlu validasi"}
      </Tag>
    ),
  },
  {
    key: "jenisKelamin",
    title: "Jenis Kelamin",
    dataIndex: "jenisKelamin",
    type: "string",
    render: (gender) => <Typography.Text>{camelText(gender)}</Typography.Text>,
  },
  {
    key: "alamat",
    title: "Alamat",
    dataIndex: "alamat",
    type: "string",
  },
  {
    key: "tempatTinggal",
    title: "Tempat Tinggal",
    dataIndex: "tempatTinggal",
    type: "string",
  },
  {
    key: "tanggalLahir",
    title: "Tanggal Lahir",
    dataIndex: "tanggalLahir",
    type: "birthDate",
  },
  {
    key: "namaOrangTua",
    title: "Nama Orang Tua",
    dataIndex: "namaOrangTua",
    type: "string",
  },
  {
    key: "noHpOrangTua",
    title: "No HP Orang Tua",
    dataIndex: "noHpOrangTua",
    type: "string",
  },
  {
    key: "tanggalDaftar",
    title: "Tanggal Daftar",
    dataIndex: "tanggalDaftar",
    type: "date",
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    fixed: "right",
    render: (
      record,
      _,
      { loadingfetch, apiUri, messageApi },
      { setLoadingFetch, setLoadingTable, router }
    ) => {
      return (
        <Flex justify="center">
          <ButtonGeneric
            variant="outlined"
            color="orange"
            icon={
              record.isApproved ? <CheckOutlined /> : <ExclamationOutlined />
            }
            {...(!record.isApproved && { text: "Validasi" })}
            disable={record.isApproved}
            onclick={() => {
              let selectedClass = null;

              const handleSelectChange = (value) => {
                selectedClass = value;
              };

              ModalConfirm({
                title: "Validasi Pendaftaran",
                content: (
                  <div className="space-y-2">
                    <Typography.Text>
                      Setujui pendaftaran siswa{" "}
                      <strong>`{record.namaSiswa}`</strong> dan pilih kelasnya:
                    </Typography.Text>
                    <Select
                      className="w-full"
                      placeholder="Pilih Kelas"
                      onChange={handleSelectChange}
                      options={classOptions}
                    />
                  </div>
                ),
                okText: "Ya",
                cancelText: "Batal",
                cancelButtonProps: { danger: true },
                confirmLoading: loadingfetch,
                onOk: async () => {
                  if (!selectedClass) {
                    notification.error({
                      message: "Silakan pilih kelas terlebih dahulu.",
                    });
                    return Promise.reject(); // prevent modal from closing
                  }

                  messageApi.open({
                    type: "loading",
                    content: "Memvalidasi pendaftaran...",
                  });
                  setLoadingFetch(true);

                  try {
                    await axios.put(`/api/${apiUri}/${record.key}`, {
                      kelas: selectedClass,
                    });

                    notification.success({
                      message: "Pendaftaran berhasil divalidasi!",
                    });

                    setLoadingTable(true);
                    router.refresh();
                  } catch (error) {
                    console.error(error);
                    notification.error({
                      message: "Gagal memvalidasi data!",
                    });
                  } finally {
                    messageApi.destroy();
                    setLoadingFetch(false);
                    setTimeout(() => setLoadingTable(false), 500);
                  }
                },
              });
            }}
          />
        </Flex>
      );
    },
  },
];

export const columnGradingConfig = [
  {
    title: "Nama Siswa",
    dataIndex: "nama",
    key: "nama",
    fixed: "left",
    width: 200,
  },
  {
    key: "nis",
    title: "NIS",
    dataIndex: "nis",
    type: "string",
  },
  {
    title: "Kelas",
    dataIndex: "kelas",
    key: "kelas",
    type: "string",
    render: (kelas) => <Typography.Text>{camelText(kelas)}</Typography.Text>,
  },
  {
    key: "tempatTinggal",
    title: "Tempat Tinggal",
    dataIndex: "tempatTinggal",
    type: "string",
  },
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    width: 200,
    roles: ["TEACHER"],
    render: (record, { handleOpenDrawer }) => (
      <Flex vertical justify="center" align="center" gap={8}>
        <ButtonGeneric
          variant="outlined"
          color="blue"
          icon={<InfoCircleFilled />}
          text="Informasi Nilai"
          onclick={() => handleOpenDrawer(record)}
        />
      </Flex>
    ),
  },
];

export const columnModalGrading = [
  // PERILAKU
  {
    title: "Perilaku",
    type: "grade",
    children: [
      {
        title: "Regulasi Diri",
        dataIndex: "regulasiDiri",
        key: "regulasiDiri",
        type: "grade",
      },
      {
        title: "Sikap Kerja",
        dataIndex: "sikapKerja",
        key: "sikapKerja",
        type: "grade",
      },
    ],
  },
  // KOMUNIKASI FUNGSIONAL
  {
    title: "Komunikasi Fungsional",
    dataIndex: "komunikasiFungsional",
    key: "komunikasiFungsional",
    type: "grade",
  },
  // INTERAKSI SOSIAL
  {
    title: "Interaksi Sosial",
    dataIndex: "interaksiSosial",
    key: "interaksiSosial",
    type: "grade",
  },
  // KEMANDIRIAN
  {
    title: "Kemandirian",
    type: "grade",
    children: [
      {
        title: "Bina Diri",
        dataIndex: "binaDiri",
        key: "binaDiri",
        type: "grade",
      },
      {
        title: "Waktu Luang",
        dataIndex: "penggunaanWaktu",
        key: "penggunaanWaktu",
        type: "grade",
      },
    ],
  },
  // NON AKADEMIS
  {
    title: "Non Akademis",
    type: "grade",
    children: [
      {
        title: "Housekeeping",
        dataIndex: "housekeeping",
        key: "housekeeping",
        type: "grade",
      },
      {
        title: "Laundry",
        dataIndex: "laundry",
        key: "laundry",
        type: "grade",
      },
      {
        title: "Tangan & Motorik",
        dataIndex: "keterampilanTangan",
        key: "keterampilanTangan",
        type: "grade",
      },
      {
        title: "Olahraga",
        dataIndex: "olahraga",
        key: "olahraga",
        type: "grade",
      },
    ],
  },
  // AKADEMIS
  {
    title: "Akademis",
    type: "grade",
    children: [
      {
        title: "Baca Tulis & Bahasa",
        dataIndex: "bacaTulisBahasa",
        key: "bacaTulisBahasa",
        type: "grade",
      },
      {
        title: "Matematika",
        dataIndex: "matematika",
        key: "matematika",
        type: "grade",
      },
      {
        title: "Pengetahuan Umum",
        dataIndex: "pengetahuanUmum",
        key: "pengetahuanUmum",
        type: "grade",
      },
      {
        title: "Outing",
        dataIndex: "outing",
        key: "outing",
        type: "grade",
      },
    ],
  },
  // ACTIONS
  {
    key: "action",
    title: <Flex justify="center">Aksi</Flex>,
    width: 200,
    roles: ["TEACHER"],
    render: (
      record,
      { showModal, refreshGrading },
      {
        apiUri,
        messageApi,
        selectedSiswa,
        selectedMonth,
        selectedYear,
        gradePage,
      },
      { setEditState, setEditData, setLoadingFetch, router }
    ) => (
      <Flex vertical justify="center" align="center" gap={8}>
        <ButtonGeneric
          variant="outlined"
          color="green"
          icon={<EditOutlined />}
          text="Ubah"
          onclick={() => {
            setEditState(true);
            setEditData(record);
            showModal();
          }}
        />
        <ButtonGeneric
          variant="outlined"
          color="red"
          icon={<DeleteOutlined />}
          text="Hapus"
          onclick={() => {
            ModalConfirm({
              title: "Apa anda yakin?",
              content: `Menghapus penilaian untuk siswa ${selectedSiswa?.nama} periode ${selectedMonth}/${selectedYear}?`,
              okText: "Ya",
              okButtonProps: { danger: true },
              cancelText: "Batal",
              onOk: async () =>
                await globalDelete({
                  record,
                  router,
                  apiUri,
                  messageApi,
                  setLoadingFetch,
                  gradePage,
                  selectedSiswa,
                  refreshGrading,
                }),
            });
          }}
        />
      </Flex>
    ),
  },
];

export const columnPresenceConfig = [
  {
    key: "user",
    title: "Nama Guru",
    dataIndex: "user",
    render: (user) => user?.name || "-",
    roles: ["ADMIN"],
  },
  {
    key: "createdAt",
    title: "Tanggal",
    dataIndex: "createdAt",
    type: "birthDate",
  },
  {
    key: "clockIn",
    title: "Absen Masuk",
    dataIndex: "clockIn",
    type: "clockIn",
  },
  {
    key: "clockOut",
    title: "Absen Keluar",
    dataIndex: "clockOut",
    type: "clockOut",
  },
];
