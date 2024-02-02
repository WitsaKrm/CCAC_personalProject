-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `f_name` VARCHAR(191) NOT NULL,
    `l_name` VARCHAR(191) NOT NULL,
    `n_name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `date_of_birth` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `role` ENUM('VISITER', 'USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `room_number` VARCHAR(191) NOT NULL,
    `price_per_month` INTEGER NOT NULL DEFAULT 0,
    `deposit` INTEGER NOT NULL DEFAULT 0,
    `status` VARCHAR(191) NOT NULL,
    `img1` VARCHAR(191) NOT NULL,
    `img2` VARCHAR(191) NOT NULL,
    `img3` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rooms_room_number_key`(`room_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `room_price` INTEGER NOT NULL DEFAULT 0,
    `water_unit_before` INTEGER NOT NULL DEFAULT 0,
    `water_unit_after` INTEGER NOT NULL DEFAULT 0,
    `electric_unit_before` INTEGER NOT NULL DEFAULT 0,
    `electric_unit_after` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('UNPAID', 'PAID') NOT NULL DEFAULT 'UNPAID',
    `other` VARCHAR(191) NOT NULL,
    `total` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaseAgrement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expired_at` DATE NOT NULL,
    `lessor` VARCHAR(191) NOT NULL,
    `tenant_1` VARCHAR(191) NOT NULL,
    `tenant_2` VARCHAR(191) NOT NULL,
    `lease_agrement_number` VARCHAR(191) NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Rental` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `lease_id` INTEGER NOT NULL,

    UNIQUE INDEX `User_Rental_lease_id_key`(`lease_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `payment_method` VARCHAR(191) NULL,
    `pay_slip` VARCHAR(191) NOT NULL,
    `status` ENUM('UNPAID', 'PAID') NOT NULL DEFAULT 'UNPAID',
    `user_id` INTEGER NOT NULL,
    `bill_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bills` ADD CONSTRAINT `Bills_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bills` ADD CONSTRAINT `Bills_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseAgrement` ADD CONSTRAINT `LeaseAgrement_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Rental` ADD CONSTRAINT `User_Rental_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Rental` ADD CONSTRAINT `User_Rental_lease_id_fkey` FOREIGN KEY (`lease_id`) REFERENCES `LeaseAgrement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_bill_id_fkey` FOREIGN KEY (`bill_id`) REFERENCES `Bills`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
