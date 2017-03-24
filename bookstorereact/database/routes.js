const express = require('express')
const app = express()
const cors = require('cors')
const pgp = require('pg-promise')
const bodyParser = require('body-parser')
const Books = require('./db.js')

//needed?
const passport = require('../auth/passport')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false}) )
app.use( cors() )

app.get('/all', (request, response) => {
  Books.getAll()
    .then( results => response.json( results ) )
      .catch( err => console.log('err', err) )
})

app.get('/:id', (request, response) => {
  const { id } = request.params
  Books.getOne(id)
    .then( results => response.json( results ) )
      .catch( err => console.log('err', err) )
})

app.get('/search/:input', (request, response) => {
  let { input } = request.params
  Books.search( input )
    .then( results => response.json( results ) )
      .catch( err => console.log('err', err) )
})

app.delete('/delete/:id', (request, response) => {
  const { id } = request.params
  Books.deleteOne( id )
    .then( () => response.json( {1: 'success'}) )
    // .then( () => response.redirect('localhost:3000') )
      .catch( err => console.log('err', err) )
})

app.put('/:id/:field', function(request, response) {
  const id = request.params.id
  const field = request.params.field
  const { input } = request.body
  Books.updateBook(id, field, input)
    .then( () => response.json({1: 'updated'}) )
      .catch( err => console.log('err', err) )
})

app.post('/new', (request, response) => {
  const { book } = request.body
  console.log('book', book.author);
  Books.createBook(book)
    .then( () => response.json({1: 'posted'}) )
      .catch( err => console.log('err', err) )
})

app.listen(5000, function() {
  console.log('Database API for pleasantpolecat is listening on port 5000!')
})
