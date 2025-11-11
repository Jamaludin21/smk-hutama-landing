import HomeHero from "@/components/sections/HomeHero";
import HomeStats from "@/components/sections/HomeStats";
import HomeMajorsPreview from "@/components/sections/HomeMajorsPreview";
import HomeNewsPreview from "@/components/sections/HomeNewsPreview";
import React from "react";

export const metadata = {
  title: "Beranda",
  description:
    "Beranda resmi SMK Hutama Pondok Gede – informasi sekolah, jurusan, prestasi, kegiatan, dan PPDB.",
};

export default function Page() {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeStats />
      <HomeMajorsPreview />
      <HomeNewsPreview />
    </React.Fragment>
  );
}
