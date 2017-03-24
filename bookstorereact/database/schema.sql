DROP DATABASE IF EXISTS pleasantpolecat;
CREATE DATABASE pleasantpolecat;

\c pleasantpolecat

DROP TABLE IF EXISTS booklist;
CREATE TABLE booklist (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  author VARCHAR(150),
  description VARCHAR(3000),
  genre VARCHAR(150),
  image_url VARCHAR(1000)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(150),
  password VARCHAR(300),
  role VARCHAR(50)
);

COPY booklist FROM '/Users/ryankent/Desktop/LG/pleasant-polecat/bookstorereact/database/booksdata.csv' DELIMITER ',' CSV HEADER
