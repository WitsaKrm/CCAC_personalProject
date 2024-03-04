/*
  Warnings:

  - The values [RESERVE] on the enum `Users_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `other_price` to the `Bills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `e_unit` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `w_unit` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bills` ADD COLUMN `other_price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rooms` ADD COLUMN `e_unit` INTEGER NOT NULL,
    ADD COLUMN `w_unit` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `status` ENUM('USER', 'BOOKER', 'TENANT') NOT NULL DEFAULT 'USER';
