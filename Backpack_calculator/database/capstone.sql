USE master
GO

--drop database if it exists
IF DB_ID('BACKPACK_CALCULATOR') IS NOT NULL
BEGIN
	ALTER DATABASE BACKPACK_CALCULATOR SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
	DROP DATABASE BACKPACK_CALCULATOR;
END

CREATE DATABASE BACKPACK_CALCULATOR
GO

USE BACKPACK_CALCULATOR
GO

--create tables

CREATE TABLE Items (
ItemName varchar(MAX) NOT NULL, 
Details varchar (MAX) NULL,
Weight Decimal (3,2) NULL,
Quantity int NULL,
)

INSERT INTO Items (ItemName) VALUES ('Backpack'),('Sleeping Bag'),('Sleeping Pad/Quilt'),('Tent/Hammock'), ('Insulated Jackets'), ('Rain and Wind Protections'), ('Base Layers'), ('Fleeces'), ('Hiking Tops'), ('Hiking Bottoms'), ('Hiking Shoes'),('Socks'),('Underwears'),('Bras'), ('Camp Tops'), ('Camp Bottoms'), ('Camp Shoes'), ('Gloves and Hats'), ('Stuff Sacks'), ('Cooking Gear(Pots/Stoves/Spoons)'), ('Trekking Poles'), ('HeadLamps'), ('First Aid Kit'), ('Toiletries'), ('Water Purification System'), ('GPS'), ('Guidebooks'), ('Others');

GO