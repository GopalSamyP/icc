-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema service
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema service
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `service` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `service` ;

-- -----------------------------------------------------
-- Table `service`.`bookingmstr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`bookingmstr` (
  `booking_int_id` INT(11) NOT NULL AUTO_INCREMENT,
  `mobile_num` VARCHAR(45) NOT NULL,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `pickup_location` VARCHAR(200) NOT NULL,
  `drop_location` VARCHAR(200) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  `est_total_fair` DOUBLE NULL DEFAULT NULL,
  `actual_total_fair` DOUBLE NULL DEFAULT NULL,
  `updated_date` DATETIME NOT NULL,
  `vechile_type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`booking_int_id`, `start_date`, `updated_date`),
  UNIQUE INDEX `booking_int_id_UNIQUE` (`booking_int_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `service`.`chennaihellotechmstr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`chennaihellotechmstr` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(200) NOT NULL,
  `customer_mobile` VARCHAR(20) NULL DEFAULT NULL,
  `created_on` DATETIME NOT NULL,
  `updated_on` DATETIME NOT NULL,
  `description` VARCHAR(200) NULL DEFAULT NULL,
  `service_type` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `service`.`icc`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`icc` (
  `idicc` INT(11) NOT NULL AUTO_INCREMENT,
  `plan_name` VARCHAR(200) NOT NULL,
  `participant_name` VARCHAR(200) NOT NULL,
  `participant_uci` VARCHAR(200) NOT NULL,
  `participant_fms_vendor` VARCHAR(200) NOT NULL,
  `details` MEDIUMTEXT NOT NULL,
  `created_on` DATETIME NOT NULL,
  `updated_on` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idicc`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `service`.`lead`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`lead` (
  `lead_int_id` INT(11) NOT NULL AUTO_INCREMENT,
  `lead_type` VARCHAR(10) NOT NULL,
  `cust_name` VARCHAR(500) NULL DEFAULT NULL,
  `cust_mobile_num` VARCHAR(16) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`lead_int_id`),
  UNIQUE INDEX `lead_int_id_UNIQUE` (`lead_int_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `service`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`user` (
  `user_int_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(189) NOT NULL,
  `password` VARCHAR(189) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `updated_date` DATETIME NOT NULL,
  PRIMARY KEY (`user_int_id`),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC),
  UNIQUE INDEX `user_int_id_UNIQUE` (`user_int_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `service`.`webtrafficmstr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `service`.`webtrafficmstr` (
  `traffic_int_id` INT(11) NOT NULL AUTO_INCREMENT,
  `domain` VARCHAR(200) NOT NULL,
  `event_date` DATETIME NOT NULL,
  `event_count` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`traffic_int_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
