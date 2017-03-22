const fs = require('fs')
if ( fs.existsSync('.env') ) {
  require('dotenv').config()
}

const connectionString = process.env.DATABASE_URL
const pgp = require('pg-promise')()
const db = pgp( connectionString )

const Books = {
  getAll: () => db.any("SELECT * FROM booklist ORDER BY title ASC", []),

  getOne: (book_id) => db.one("SELECT * FROM booklist WHERE book_id =$1", [book_id]),

  search: (input) => {
    input = `%${input}%`
    return db.any("SELECT * FROM booklist WHERE UPPER(title) LIKE UPPER($1) OR UPPER(author) LIKE UPPER($1) OR UPPER(genre) LIKE UPPER($1) ORDER BY title ASC", [input])
  },

  deleteOne: (book_id) => db.none("DELETE FROM booklist WHERE book_id = $1", [book_id]),

  updateBook: (book_id, title, author, genre) => db.none("UPDATE booklist SET title = $2, author = $3, genre = $4 WHERE book_id = $1", [book_id, title, author, genre]),

  createBook: (title, author, genre) => db.none("INSERT INTO booklist (title, author, genre) VALUES ($1, $2, $3)", [title, author, genre])
}

module.exports = Books
