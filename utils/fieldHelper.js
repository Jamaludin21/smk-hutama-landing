import { classOptions, genderOptions, gradingOptions } from "./dataHelper";
import { validateUploadImage } from "./functionHelper";

export const fieldsRegist = [
  { name: "namaSiswa", label: "Nama siswa", type: "text", required: true },
  {
    name: "jenisKelamin",
    label: "Jenis Kelamin",
    type: "select",
    required: true,
    options: genderOptions,
  },
  { name: "alamat", label: "Alamat", type: "text", required: true },
  {
    name: "tempatTinggal",
    label: "Tempat lahir",
    type: "text",
    required: true,
  },
  {
    name: "namaOrangTua",
    label: "Nama Orangtua",
    type: "text",
    required: true,
  },
  {
    name: "noHpOrangTua",
    label: "No Hp Orangtua",
    type: "text",
    required: true,
  },
  {
    name: "tanggalLahir",
    label: "Tanggal lahir",
    type: "date",
    required: true,
  },
  {
    name: "tanggalDaftar",
    label: "Tanggal Pendaftaran",
    type: "date",
    required: true,
  },
];

export const userFields = (setIsImageValid) => [
  {
    label: "Name",
    name: "name",
    type: "input",
    placeholder: "Masukan nama",
    rules: [{ required: true, message: "Nama wajib diisi" }],
  },
  {
    label: "Username",
    name: "username",
    type: "input",
    placeholder: "Masukan username",
    rules: [{ required: true, message: "Username wajib diisi" }],
  },
  {
    label: "Email",
    name: "email",
    type: "input",
    placeholder: "Masukan email",
    rules: [{ required: true, message: "Email wajib diisi", type: "email" }],
  },
  {
    name: "avatar",
    label: "Upload Gambar",
    type: "upload",
    required: true,
    rules: [{ required: true, message: "Gambar wajib diunggah" }],
    props: {
      listType: "picture-card",
      maxCount: 1,
      beforeUpload: (file) => validateUploadImage(file, setIsImageValid),
    },
  },
];

export const studentFields = (setIsImageValid) => [
  {
    label: "Nama",
    name: "nama",
    type: "input",
    required: true,
    placeholder: "Masukan nama",
    rules: [{ required: true, message: "Nama wajib diisi" }],
  },
  {
    name: "kelas",
    label: "Kelas",
    type: "select",
    required: true,
    placeholder: "Pilih kelas",
    options: classOptions,
    rules: [{ required: true, message: "Nama wajib diisi" }],
  },
  {
    name: "jenisKelamin",
    label: "Jenis Kelamin",
    type: "select",
    required: true,
    placeholder: "Pilih jenis kelamin",
    options: genderOptions,
    rules: [{ required: true, message: "Nama wajib diisi" }],
  },
  {
    label: "Alamat",
    name: "alamat",
    type: "input",
    required: true,
    placeholder: "Masukan alamat",
    rules: [{ required: true, message: "Alamat wajib diisi" }],
  },
  {
    label: "Tempat Tinggal",
    name: "tempatTinggal",
    type: "input",
    required: true,
    placeholder: "Masukan tempat tinggal",
    rules: [{ required: true, message: "Tempat tinggal wajib diisi" }],
  },
  {
    label: "Tanggal Lahir",
    name: "tanggalLahir",
    type: "date",
    required: true,
    placeholder: "Pilih tanggal lahir",
    rules: [{ required: true, message: "Tanggal lahir wajib diisi" }],
  },
  {
    name: "avatar",
    label: "Upload Gambar",
    type: "upload",
    required: true,
    rules: [{ required: true, message: "Gambar wajib diunggah" }],
    props: {
      listType: "picture-card",
      maxCount: 1,
      beforeUpload: (file) => validateUploadImage(file, setIsImageValid),
    },
  },
];

export const galleryFields = (setIsImageValid) => [
  {
    label: "Judul",
    name: "judul",
    type: "input",
    placeholder: "Masukan judul",
    rules: [{ required: true, message: "Judul wajib diisi" }],
  },
  {
    name: "deskripsi",
    label: "Deskripsi",
    type: "textarea",
    placeholder: "Masukan deskripsi",
  },
  {
    name: "fileUrl",
    label: "Upload Gambar",
    type: "upload",
    required: true,
    rules: [{ required: true, message: "Gambar wajib diunggah" }],
    props: {
      listType: "picture-card",
      maxCount: 1,
      beforeUpload: (file) => validateUploadImage(file, setIsImageValid),
    },
  },
];

export const karyaFields = (siswaOptions, setIsImageValid) => [
  {
    label: "Judul",
    name: "judul",
    type: "input",
    placeholder: "Masukan judul",
    rules: [{ required: true, message: "Judul wajib diisi" }],
  },
  {
    name: "price",
    label: "Harga",
    type: "string",
    placeholder: "Masukan harga",
    rules: [{ required: true, message: "Harga wajib dicantumkan" }],
  },
  {
    name: "pemilikNama",
    label: "Pemilik Karya",
    type: "select",
    options: siswaOptions,
    placeholder: "Pilih siswa",
    rules: [{ required: true, message: "Pemilik karya wajib dipilih" }],
  },
  {
    name: "kelas",
    label: "Kelas",
    type: "select",
    props: {
      disabled: true,
    },
    rules: [{ required: true, message: "Kelas wajib dipilih" }],
  },
  {
    name: "deskripsi",
    label: "Deskripsi",
    type: "textarea",
    placeholder: "Masukan deskripsi",
  },
  {
    name: "fileUrl",
    label: "Upload Gambar",
    type: "upload",
    rules: [{ required: true, message: "Gambar wajib diunggah" }],
    props: {
      listType: "picture-card",
      maxCount: 1,
      beforeUpload: (file) => validateUploadImage(file, setIsImageValid),
    },
  },
];

export const programFields = (setIsImageValid) => [
  {
    label: "Judul",
    name: "judul",
    type: "input",
    placeholder: "Masukan judul",
    rules: [{ required: true, message: "Judul wajib diisi" }],
  },
  {
    name: "deskripsi",
    label: "Deskripsi",
    type: "textarea",
    placeholder: "Masukan deskripsi",
    required: true,
    rules: [{ required: true, message: "Deskripsi wajib diisi" }],
  },
  {
    name: "fileUrl",
    label: "Upload Gambar",
    type: "upload",
    required: true,
    rules: [{ required: true, message: "Gambar wajib diunggah" }],
    props: {
      listType: "picture-card",
      maxCount: 1,
      beforeUpload: (file) => validateUploadImage(file, setIsImageValid),
    },
  },
];

export const gradingFields = [
  {
    label: "Bulan",
    name: "tanggal",
    type: "date",
    required: true,
    placeholder: "Pilih bulan",
    picker: "month",
    rules: [{ required: true, message: "Bulan wajib dipilih" }],
  },
  // 1. Perilaku
  {
    name: "regulasiDiri",
    label: "Perilaku - Regulasi Diri",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "sikapKerja",
    label: "Perilaku - Sikap Kerja",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },

  // 2. Komunikasi Fungsional
  {
    name: "komunikasiFungsional",
    label: "Komunikasi Fungsional",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },

  // 3. Interaksi Sosial
  {
    name: "interaksiSosial",
    label: "Interaksi Sosial",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },

  // 4. Kemandirian
  {
    name: "binaDiri",
    label: "Kemandirian - Bina Diri",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "penggunaanWaktu",
    label: "Kemandirian - Penggunaan Waktu Luang",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },

  // 5. Non Akademis
  {
    name: "housekeeping",
    label: "Non Akademis - Housekeeping",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "laundry",
    label: "Non Akademis - Laundry",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "keterampilanTangan",
    label: "Non Akademis - Keterampilan Tangan & Motorik",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "olahraga",
    label: "Non Akademis - Olahraga",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },

  // 6. Akademis
  {
    name: "bacaTulisBahasa",
    label: "Akademis - Baca Tulis dan Bahasa",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "matematika",
    label: "Akademis - Matematika",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "pengetahuanUmum",
    label: "Akademis - Pengetahuan Umum",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
  {
    name: "outing",
    label: "Akademis - Outing",
    type: "select",
    options: gradingOptions,
    placeholder: "Pilih nilai",
    required: true,
    rules: [{ required: true, message: "Nilai wajib dipilih" }],
  },
];
