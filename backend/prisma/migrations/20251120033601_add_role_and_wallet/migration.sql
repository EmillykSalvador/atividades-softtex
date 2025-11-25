/*
  Warnings:

  - You are about to drop the column `planId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `associatedcompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `Payment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `Sale_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_planId_fkey`;

-- DropIndex
DROP INDEX `User_planId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `planId`,
    ADD COLUMN `role` ENUM('CLIENTE', 'ASSOCIADO', 'ADMIN') NOT NULL DEFAULT 'CLIENTE';

-- DropTable
DROP TABLE `associatedcompany`;

-- DropTable
DROP TABLE `payment`;

-- DropTable
DROP TABLE `plan`;

-- DropTable
DROP TABLE `sale`;
