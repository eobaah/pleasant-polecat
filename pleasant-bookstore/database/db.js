const fs = require('fs')
if ( fs.existsSync('.env') ) {
  require('dotenv').config()
}

const connectionString = process.env.DATABASE_URL
const pgp = require('pg-promise')()
const db = pgp( connectionString )

const Books = {
  getAll: () => db.any("SELECT * FROM booklist ORDER BY title ASC", []),
  getAllbyTitle: (title) => {
    title = `%${title}%`
    return db.any("SELECT * FROM booklist WHERE UPPER(title) LIKE UPPER($1)", [title])
  },
  getAllbyAuthor: (author) => {
    author = `%${author}%`
    return db.any("SELECT * FROM booklist WHERE UPPER(author) LIKE UPPER($1)", [author])
  },
  getAllbyGenre: (genre) => {
    genre = `%${genre}%`
    return db.any("SELECT * FROM booklist WHERE UPPER(genre) LIKE UPPER($1)", [genre])
  },
  deleteOne: (book_id) => db.none("DELETE FROM booklist WHERE book_id = $1", [book_id]),
  updateBook: (book_id, title, author, genre) => db.none("UPDATE booklist SET title = $2, author = $3, genre = $4 WHERE book_id = $1", [book_id, title, author, genre]),
  createBook: (title, author, genre) => db.none("INSERT INTO booklist (title, author, genre) VALUES ($1, $2, $3)", [title, author, genre])
}

module.exports = Books
