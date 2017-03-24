const fs = require('fs')
if ( fs.existsSync('.env') ) {
  require('dotenv').config()
}
const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/pleasantpolecat`
const db = pgp( connectionString )

const Books = {
  getAll: () => db.any("SELECT * FROM booklist ORDER BY title ASC", []),

  getOne: (book_id) => db.one("SELECT * FROM booklist WHERE book_id = $1", [book_id]),

  search: (input) => {
    input = `%${input}%`
    return db.any("SELECT * FROM booklist WHERE UPPER(title) LIKE UPPER($1) OR UPPER(author) LIKE UPPER($1) OR UPPER(genre) LIKE UPPER($1) ORDER BY title ASC", [input])
  },

  deleteOne: (book_id) => db.none("DELETE FROM booklist WHERE book_id = $1", [book_id]),

  updateBook: (book_id, field, input) => {
    if (field === 'title') {
      return db.none("Update booklist SET title = $2 WHERE book_id = $1", [book_id, input])
    }
    else if (field === 'author') {
      return db.none("Update booklist SET author = $2 WHERE book_id = $1", [book_id, input])
    }
    else if (field === 'genre') {
      return db.none("Update booklist SET genre = $2 WHERE book_id = $1", [book_id, input])
    }
    else if (field === 'description') {
      return db.none("Update booklist SET description = $2 WHERE book_id = $1", [book_id, input])
    }
  },

  createBook: ({title, author, description, genre, image_url}) => db.any("INSERT INTO booklist (title, author, description, genre, image_url) VALUES ($1, $2, $3, $4, $5)", [title, author, description, genre, image_url])
}

module.exports = Books
