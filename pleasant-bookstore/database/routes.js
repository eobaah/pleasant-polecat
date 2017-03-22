const express = require('express')
const app = express()
const cors = require('cors')
const pgp = require('pg-promise')
const bodyParser = require('body-parser')
const Books = require('./db.js')

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

app.delete('/:id', (request, response) => {
  const { id } = request.params
  Books.deleteOne( id )
    .then( () => response.json( {1: 'success'}) )
      .catch( err => console.log('err', err) )
})

app.listen(5000, function() {
  console.log('Database API for Huge Manatee is listening on port 5000!')
})
