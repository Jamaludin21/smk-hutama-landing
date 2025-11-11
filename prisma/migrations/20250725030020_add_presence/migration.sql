-- CreateEnum
CREATE TYPE "PresenceStatus" AS ENUM ('ontime', 'late', 'early');

-- CreateTable
CREATE TABLE "Presensi" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clockIn" TIMESTAMP(3),
    "clockOut" TIMESTAMP(3),
    "statusIn" "PresenceStatus",
    "statusOut" "PresenceStatus",
    "latitudeIn" TEXT,
    "longitudeIn" TEXT,
    "latitudeOut" TEXT,
    "longitudeOut" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Presensi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Presensi" ADD CONSTRAINT "Presensi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
