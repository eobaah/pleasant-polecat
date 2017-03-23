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

COPY booklist FROM '/Users/ryankent/Desktop/LG/pleasant-polecat/pleasant-bookstore/database/booksdata.csv' DELIMITER ',' CSV HEADER
