import { siteConfig } from "./siteConfig";

export const pageMeta = {
  home: {
    title: "Beranda",
    description:
      "Beranda resmi SMK Hutama Pondok Gede: profil sekolah, program keahlian, kegiatan, dan informasi PPDB.",
  },
  profilSambutan: {
    title: "Sambutan Kepala Sekolah",
    description:
      "Sambutan Kepala SMK Hutama Pondok Gede kepada orang tua, peserta didik, dan masyarakat.",
  },
  profilVisiMisi: {
    title: "Visi & Misi",
    description:
      "Visi, misi, dan tujuan SMK Hutama dalam membentuk lulusan yang berkarakter dan kompeten.",
  },
  jurusan: {
    title: "Program Keahlian",
    description: "Daftar program keahlian unggulan SMK Hutama Pondok Gede.",
  },
  ekstrakurikuler: {
    title: "Ekstrakurikuler",
    description:
      "Pilihan kegiatan ekstrakurikuler untuk mengembangkan minat dan bakat siswa SMK Hutama.",
  },
  berita: {
    title: "Berita",
    description:
      "Informasi berita dan kegiatan terbaru di SMK Hutama Pondok Gede.",
  },
  galeri: {
    title: "Galeri",
    description:
      "Dokumentasi foto kegiatan dan fasilitas SMK Hutama Pondok Gede.",
  },
  ppdb: {
    title: "PPDB Online",
    description:
      "Informasi resmi Penerimaan Peserta Didik Baru SMK Hutama Pondok Gede.",
  },
  download: {
    title: "Download",
    description: "Dokumen dan berkas resmi yang dapat diunduh dari SMK Hutama.",
  },
  kontak: {
    title: "Kontak",
    description: "Informasi kontak dan lokasi SMK Hutama Pondok Gede.",
  },
};

export function buildMeta(config) {
  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: config.title + " | " + siteConfig.name,
      description: config.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [siteConfig.ogImage],
    },
  };
}
