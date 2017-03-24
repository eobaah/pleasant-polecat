DROP DATABASE IF EXISTS pleasantpolecatdb;
CREATE DATABASE pleasantpolecatdb;

CREATE TABLE IF NOT EXISTS bookstore(
 id SERIAL PRIMARY KEY,
 title VARCHAR(140),
 author VARCHAR(140),
 preview VARCHAR(3000),
 genre VARCHAR(150),
 image_url VARCHAR(1000)
);

CREATE TABLE IF NOT EXISTS users(
 id SERIAL PRIMARY KEY,
 email VARCHAR(140),
 password VARCHAR(300),
 role VARCHAR(3000)
);



COPY bookstore from '/Users/baahmac/Documents/LearnersGuild/LgProjects/pleasant-polecat/database/booksdata.csv' DELIMITER ',' CSV HEADER;
