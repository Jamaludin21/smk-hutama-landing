export const siteConfig = {
  name: "SMK Hutama Pondok Gede",
  shortName: "SMK Hutama",
  tagline: "Siap Kerja, Siap Kuliah, Siap Wirausaha",
  description:
    "SMK Hutama Pondok Gede adalah Sekolah Menengah Kejuruan terakreditasi A yang berkomitmen mencetak lulusan berkarakter, kompeten, dan siap bersaing di dunia kerja maupun perguruan tinggi.",
  url: "https://smkhutama.sch.id",
  logo: "https://a1epuokipdvggoec.public.blob.vercel-storage.com/SMK%20HUTAMA%20REDESIGN-1CH7729ODJDtWJl7q1Ko7lgaylTsFq.png",
  ogImage:
    "https://a1epuokipdvggoec.public.blob.vercel-storage.com/galler3-o5kwiisYRp4uvnXsCgLwwPTh33ciMD.jpg",
  address:
    "Jl. Raya Hankam No.37, Jatirahayu, Kec. Pondok Melati, Kota Bekasi, Jawa Barat 17414",
  city: "Bekasi",
  province: "Jawa Barat",
  postalCode: "17414",
  phone: "(021) 84990823",
  whatsapp: "+6283892950029",
  email: "info@smkhutama.sch.id",
  altEmail: "email.smkhutama@gmail.com",
  npsn: "20223118",
  accreditation: "A",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5677!2d106.936!3d-6.448!2m3!1f0!2f0!3f0!",
  socialLinks: {
    instagram: "https://www.instagram.com/smkhutamabekasi",
    facebook: "https://www.facebook.com/SMK-Hutama-Bekasi-100063849443662",
    youtube: "",
    tiktok: "",
  },
  ppdb: {
    infoPage: "/ppdb",
    officialOnlineForm: "https://smkhutama.sch.id/pendaftaran-online/",
    brochureUrl: "/downloads/brosur-ppdb-smk-hutama.pdf",
    contactWhatsapp: "+6283892950029",
  },
};

export const mainNav = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { label: "Sambutan Kepala Sekolah", href: "/profil/sambutan" },
      { label: "Sejarah", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Guru & Tendik", href: "/profil/guru" },
      { label: "Prestasi", href: "/profil/prestasi" },
    ],
  },
  {
    label: "Informasi",
    children: [
      { label: "Jurusan", href: "/informasi/jurusan" },
      { label: "Ekstrakurikuler", href: "/informasi/ekstrakurikuler" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  {
    label: "PPDB Online",
    children: [
      { label: "Informasi PPDB", href: "/ppdb" },
      {
        label: "Pendaftaran Online",
        href: "https://smkhutama.sch.id/pendaftaran-online/",
      },
    ],
  },
  { label: "Download", href: "/download" },
  { label: "Kontak", href: "/kontak" },
];
