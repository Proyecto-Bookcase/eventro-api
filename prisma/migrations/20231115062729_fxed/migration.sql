/*
  Warnings:

  - You are about to drop the `Asistence` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asistence" DROP CONSTRAINT "Asistence_inscription_id_fkey";

-- DropTable
DROP TABLE "Asistence";

-- CreateTable
CREATE TABLE "Asistance" (
    "id" TEXT NOT NULL,
    "inscription_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asistance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asistance_inscription_id_key" ON "Asistance"("inscription_id");

-- AddForeignKey
ALTER TABLE "Asistance" ADD CONSTRAINT "Asistance_inscription_id_fkey" FOREIGN KEY ("inscription_id") REFERENCES "Inscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
