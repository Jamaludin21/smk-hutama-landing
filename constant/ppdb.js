import { siteConfig } from "./siteConfig";

export const ppdbConfig = {
  academicYear: "2025/2026", // update tiap tahun
  infoPagePath: "/ppdb",
  officialOnlineFormUrl: "https://smkhutama.sch.id/pendaftaran-online/",
  contactWhatsapp: siteConfig.whatsapp,
  notes: [
    "Calon peserta didik adalah lulusan SMP/MTs/sederajat.",
    "Tidak dipungut biaya formulir pendaftaran (cek kembali kebijakan resmi).",
    "Pemilihan program keahlian dilakukan saat pendaftaran dengan bimbingan panitia PPDB.",
  ],
};

export const ppdbRequirements = [
  "Mengisi formulir pendaftaran (online/offline) yang disediakan sekolah.",
  "Fotokopi Akta Kelahiran.",
  "Fotokopi Kartu Keluarga.",
  "Fotokopi KTP orang tua/wali.",
  "Fotokopi NISN.",
  "Fotokopi ijazah atau Surat Keterangan Lulus (jika sudah ada).",
  "Fotokopi rapor semester akhir SMP/MTs.",
  "Pas foto berwarna ukuran 2x3 dan 3x4 (jumlah menyesuaikan kebutuhan).",
  // Sesuaikan rinciannya dengan keputusan resmi panitia PPDB.
];

export const ppdbTimeline = [
  // Contoh; set sesuai juknis resmi
  {
    label: "Pendaftaran Gelombang 1",
    period: "Januari - Maret 2025",
    description: "Pendaftaran awal dengan kuota terbatas.",
    isTentative: true,
  },
  {
    label: "Pendaftaran Gelombang 2",
    period: "April - Juni 2025",
    description: "Perpanjangan apabila kuota masih tersedia.",
    isTentative: true,
  },
];
