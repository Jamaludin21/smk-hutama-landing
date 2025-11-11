const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");
const { default: slugify } = require("slugify");

const prisma = new PrismaClient();

function getRandomGrade() {
  const grades = ["A", "A_Pi", "A_Pi_Pvis", "P_Pv_Pvis"];
  return grades[Math.floor(Math.random() * grades.length)];
}

async function main() {
  // Clean up
  await prisma.karyaSiswa.deleteMany();
  await prisma.agenda.deleteMany();
  await prisma.galeri.deleteMany();
  await prisma.penilaianSiswa.deleteMany();
  await prisma.siswa.deleteMany();
  await prisma.pendaftaranSiswaBaru.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await hash("password123", 10);

  // Admin
  await prisma.user.create({
    data: {
      username: "Andri21",
      password: passwordHash,
      role: "ADMIN",
      name: "Andri",
      phoneNumber: "081452238282",
      avatar:
        "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/WhatsApp%20Image%202025-06-28%20at%2010.45.39-GHTg8mRaGX2yYIWYfRGl6yLoyV97w7.jpeg",
      email: "Andri21@gmail.com",
    },
  });

  // Create Teacher Users
  const teachers = [];
  for (let i = 1; i <= 2; i++) {
    const teacherUser = await prisma.user.create({
      data: {
        username: `teacher${i}`,
        password: passwordHash,
        role: "TEACHER",
        name: `Teacher ${i}`,
        email: `teacher${i}@example.com`,
        phoneNumber: `08123456789${i}`,
        avatar:
          "https://ythitbxiwgganpuo.public.blob.vercel-storage.com/assets/download-cRXmEtw7UOKX7S6lGJ7epD8ZFBykFG.jpeg",
      },
    });

    teachers.push(teacherUser);
  }

  // Agenda & Galeri
  for (let j = 1; j <= 8; j++) {
    const judulAgenda = `Agenda ${j}`;
    const judulGaleri = `Galeri ${j}`;
    const slugAgenda = slugify(judulAgenda, { lower: true, strict: true });
    const slugGaleri = slugify(judulGaleri, { lower: true, strict: true });

    await prisma.agenda.create({
      data: {
        judul: judulAgenda,
        slug: slugAgenda,
        fileUrl: `https://picsum.photos/200?random=${j}`,
        deskripsi: `Deskripsi agenda ${j}`,
        createdById: teachers[0].id,
      },
    });

    await prisma.galeri.create({
      data: {
        judul: judulGaleri,
        slug: slugGaleri,
        fileUrl: `https://picsum.photos/200?random=${j}`,
        deskripsi: `Deskripsi galeri ${j}`,
        createdById: teachers[0].id,
      },
    });
  }

  // Siswa, Karya, dan Penilaian
  for (let k = 1; k <= 5; k++) {
    const pendaftaran = await prisma.pendaftaranSiswaBaru.create({
      data: {
        namaSiswa: `Siswa ${k}`,
        jenisKelamin: k % 2 === 0 ? "PEREMPUAN" : "LAKI_LAKI",
        alamat: `Alamat Siswa ${k}`,
        tempatTinggal: `Kota ${k}`,
        tanggalLahir: new Date(2010 + k, k % 12, k),
        namaOrangTua: `Orangtua ${k}`,
        noHpOrangTua: `08123456${k}00`,
      },
    });

    const siswa = await prisma.siswa.create({
      data: {
        nis: `NIS${1000 + k}`,
        nama: pendaftaran.namaSiswa,
        jenisKelamin: pendaftaran.jenisKelamin,
        alamat: pendaftaran.alamat,
        tempatTinggal: pendaftaran.tempatTinggal,
        tanggalLahir: pendaftaran.tanggalLahir,
        kelas: k % 2 === 0 ? "Dasar_1" : "Lanjutan_1",
        avatar: `https://picsum.photos/200?random=${k}`,
        pendaftaran: {
          connect: { id: pendaftaran.id },
        },
      },
    });

    await prisma.pendaftaranSiswaBaru.update({
      where: { id: pendaftaran.id },
      data: {
        isApproved: true,
        siswaId: siswa.id,
      },
    });

    // Karya
    const judulKarya = `Karya Siswa ${k}`;
    const slugKarya = slugify(judulKarya, { lower: true, strict: true });

    const harga = parseFloat(
      (Math.random() * (100000 - 15000) + 15000).toFixed(2)
    );

    await prisma.karyaSiswa.create({
      data: {
        judul: judulKarya,
        slug: slugKarya,
        pemilikId: siswa.id,
        kelas: siswa.kelas,
        fileUrl: `https://picsum.photos/200?random=${k}`,
        deskripsi: `Deskripsi karya siswa ${k}`,
        price: harga,
        isApproved: true,
        createdById: teachers[0].id,
      },
    });

    // Penilaian Siswa
    await prisma.penilaianSiswa.create({
      data: {
        siswaId: siswa.id,
        regulasiDiri: getRandomGrade(),
        sikapKerja: getRandomGrade(),
        komunikasiFungsional: getRandomGrade(),
        interaksiSosial: getRandomGrade(),
        binaDiri: getRandomGrade(),
        penggunaanWaktu: getRandomGrade(),
        housekeeping: getRandomGrade(),
        laundry: getRandomGrade(),
        keterampilanTangan: getRandomGrade(),
        olahraga: getRandomGrade(),
        bacaTulisBahasa: getRandomGrade(),
        matematika: getRandomGrade(),
        pengetahuanUmum: getRandomGrade(),
        outing: getRandomGrade(),
      },
    });
  }

  console.log("🌱 Seed data created with penilaian siswa!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
