/*
  Warnings:

  - The `latitudeIn` column on the `Presensi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `longitudeIn` column on the `Presensi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `latitudeOut` column on the `Presensi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `longitudeOut` column on the `Presensi` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Presensi" DROP COLUMN "latitudeIn",
ADD COLUMN     "latitudeIn" DOUBLE PRECISION,
DROP COLUMN "longitudeIn",
ADD COLUMN     "longitudeIn" DOUBLE PRECISION,
DROP COLUMN "latitudeOut",
ADD COLUMN     "latitudeOut" DOUBLE PRECISION,
DROP COLUMN "longitudeOut",
ADD COLUMN     "longitudeOut" DOUBLE PRECISION;
