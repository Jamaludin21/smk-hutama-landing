-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'TEACHER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateEnum
CREATE TYPE "KelasGuru" AS ENUM ('Lanjutan_1', 'Lanjutan_2', 'Dasar_1', 'Dasar_2', 'Wirausaha');

-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('A', 'A_Pi', 'A_Pi_Pvis', 'P_Pv_Pvis');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'TEACHER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),
    "createdById" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendaftaranSiswaBaru" (
    "id" TEXT NOT NULL,
    "namaSiswa" TEXT NOT NULL,
    "jenisKelamin" "Gender" NOT NULL,
    "alamat" TEXT NOT NULL,
    "tempatTinggal" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "namaOrangTua" TEXT NOT NULL,
    "noHpOrangTua" TEXT NOT NULL,
    "tanggalDaftar" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "siswaId" TEXT,

    CONSTRAINT "PendaftaranSiswaBaru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" TEXT NOT NULL,
    "nis" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jenisKelamin" "Gender" NOT NULL,
    "alamat" TEXT NOT NULL,
    "tempatTinggal" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "kelas" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PenilaianSiswa" (
    "id" TEXT NOT NULL,
    "siswaId" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "regulasiDiri" "Grade" NOT NULL,
    "sikapKerja" "Grade" NOT NULL,
    "komunikasiFungsional" "Grade" NOT NULL,
    "interaksiSosial" "Grade" NOT NULL,
    "binaDiri" "Grade" NOT NULL,
    "penggunaanWaktu" "Grade" NOT NULL,
    "housekeeping" "Grade" NOT NULL,
    "laundry" "Grade" NOT NULL,
    "keterampilanTangan" "Grade" NOT NULL,
    "olahraga" "Grade" NOT NULL,
    "bacaTulisBahasa" "Grade" NOT NULL,
    "matematika" "Grade" NOT NULL,
    "pengetahuanUmum" "Grade" NOT NULL,
    "outing" "Grade" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PenilaianSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KaryaSiswa" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "pemilikId" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "deskripsi" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "KaryaSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galeri" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Galeri_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PendaftaranSiswaBaru_siswaId_key" ON "PendaftaranSiswaBaru"("siswaId");

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nis_key" ON "Siswa"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "KaryaSiswa_slug_key" ON "KaryaSiswa"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_slug_key" ON "Agenda"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Galeri_slug_key" ON "Galeri"("slug");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendaftaranSiswaBaru" ADD CONSTRAINT "PendaftaranSiswaBaru_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PenilaianSiswa" ADD CONSTRAINT "PenilaianSiswa_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KaryaSiswa" ADD CONSTRAINT "KaryaSiswa_pemilikId_fkey" FOREIGN KEY ("pemilikId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KaryaSiswa" ADD CONSTRAINT "KaryaSiswa_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Galeri" ADD CONSTRAINT "Galeri_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
