/*
  Warnings:

  - Added the required column `room_id` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payments` ADD COLUMN `room_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
