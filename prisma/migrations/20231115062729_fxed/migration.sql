/*
  Warnings:

  - You are about to drop the `Asistence` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asistence" DROP CONSTRAINT "Asistence_inscription_id_fkey";

-- DropTable
DROP TABLE "Asistence";

-- CreateTable
CREATE TABLE "Assistance" (
    "id" TEXT NOT NULL,
    "inscription_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assistance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Assistance_inscription_id_key" ON "Assistance"("inscription_id");

-- AddForeignKey
ALTER TABLE "Assistance" ADD CONSTRAINT "Assistance_inscription_id_fkey" FOREIGN KEY ("inscription_id") REFERENCES "Inscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
