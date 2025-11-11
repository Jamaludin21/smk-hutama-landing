import { DatePicker, Input, InputNumber, Select, Upload } from "antd";

export const roleColors = {
  ADMIN: "red",
  TEACHER: "blue",
};

export const roleOptions = [
  { label: "Admin", value: "ADMIN" },
  { label: "Teacher", value: "TEACHER" },
];

export const genderOptions = [
  { label: "Laki-laki", value: "LAKI_LAKI" },
  { label: "Perempuan", value: "PEREMPUAN" },
];

export const classOptions = [
  { label: "Dasar 1", value: "Dasar_1" },
  { label: "Dasar 2", value: "Dasar_2" },
  { label: "Lanjutan 1", value: "Lanjutan_1" },
  { label: "Lanjutan 2", value: "Lanjutan_2" },
  { label: "Wirausaha", value: "Wirausaha" },
];

export const gradingOptions = [
  { label: "A - Mandiri", value: "A" },
  {
    label: "A-Pi - Mandiri dg sedikit bantuan isyarat / diingatkan",
    value: "A_Pi",
  },
  {
    label: "A-Pi, Pvis - Dibantu dg isyarat & visual",
    value: "A_Pi_Pvis",
  },
  {
    label:
      "P++/Pv, Pvis - Belum mandiri, banyak bantuan (verbal, visual, fisik)",
    value: "P_Pv_Pvis",
  },
];

export const gradeLabelMap = {
  A: "A",
  A_Pi: "A-Pi",
  A_Pi_Pvis: "A-Pi, Pvis",
  P_Pv_Pvis: "P++/Pv, Pvis",
};

export const componentMap = {
  input: Input,
  textarea: Input.TextArea,
  number: InputNumber,
  select: Select,
  password: Input.Password,
  upload: Upload,
  date: DatePicker,
};

export const imageHomeGrid = [
  [
    "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/02042014-sekolah-anugerah-DrFqFRYjkQYWYdm7b02QjRqOQxXYNT.jpg",
    "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/067197900_1490531549-DSC_2051-2Sdl0j9DRGTnMWTxGbWL9kPsqGNbG6.JPG",
  ],
  [
    "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/image-Wfxs02kw4TU80rj1m0oGbLJsNdpL5F.png",
  ],
  [
    "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/image%20%281%29-ScdHxBA9rLdE8KolsvS2ns6Ifod4nl.png",
    "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/jt-bHZzbInyfz4moNSORNmrFuJ9NRxqTG.jpg",
  ],
];

export const homeDescription =
  "(Pendidikan Lanjutan Individu Autistik Lentera Asa) adalah lembaga pendidikan khusus yang berlokasi di Jalan Ciangsana No. 60, Gunung Putri, Bogor, dan telah berdiri sejak Juli 2011. Kami berkomitmen mendampingi remaja dan dewasa dengan autisme agar mampu mandiri secara pribadi dan finansial, serta berkarya sesuai minat dan potensinya.";
