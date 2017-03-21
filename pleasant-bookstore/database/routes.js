const express = require('express')
const app = express()
const cors = require('cors')
const pgp = require('pg-promise')
const bodyParser = require('body-parser')
const _ = require('lodash')

const Books = require('./db.js')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false}) )
app.use( cors() )

app.get('/all', (request, response) => {
  Books.getAll()
    .then( results => response.json( results ) )
})

app.delete('/:id', (request, response) => {
  const { id } = request.params
  Books.deleteOne( id )
    .then( () => response.json( {1: 'success'}) )
})

app.get('/search/:input', (request, response) => {
  let { input } = request.params
  Promise.all([
    Books.getAllbyTitle( input ),
    Books.getAllbyAuthor( input ),
    Books.getAllbyGenre( input )
  ])
    .then( results => {
      results = _.flatten(results)
      response.json( results )
    })
      .catch( (err) => {
        console.log('err', err);
      })
})

app.listen(5000, function() {
  console.log('Database API for Huge Manatee is listening on port 5000!')
})
