/*
  Warnings:

  - The values [VISITER] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('GUEST', 'USER', 'ADMIN') NOT NULL DEFAULT 'USER';
