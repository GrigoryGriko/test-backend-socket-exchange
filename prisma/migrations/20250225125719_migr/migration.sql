/*
  Warnings:

  - You are about to drop the `Companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Objects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Companies";

-- DropTable
DROP TABLE "Objects";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Object" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);
