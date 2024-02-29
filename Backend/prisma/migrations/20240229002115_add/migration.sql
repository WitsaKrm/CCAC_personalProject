/*
  Warnings:

  - You are about to alter the column `status` on the `rooms` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - The values [GUEST] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `bills` MODIFY `status` ENUM('UNPAID', 'PAID', 'CHECKING') NOT NULL DEFAULT 'UNPAID';

-- AlterTable
ALTER TABLE `payments` MODIFY `status` ENUM('UNPAID', 'PAID', 'CHECKING') NOT NULL DEFAULT 'UNPAID';

-- AlterTable
ALTER TABLE `rooms` MODIFY `status` ENUM('AVALIABLE', 'UNAVALIABLE', 'ALREADY_RESERVED') NOT NULL DEFAULT 'AVALIABLE';

-- AlterTable
ALTER TABLE `users` ADD COLUMN `status` ENUM('USER', 'RESERVE', 'TENANT') NOT NULL DEFAULT 'USER',
    MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `Promblem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `detail` VARCHAR(191) NOT NULL,
    `detail2` VARCHAR(191) NOT NULL,
    `detail3` VARCHAR(191) NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Promblem` ADD CONSTRAINT `Promblem_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
