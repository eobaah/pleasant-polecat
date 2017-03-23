const express = require('express');
const router = express.Router();
const _ = require( 'lodash' )
const Book = require( '../database/database')
const moment = require( 'moment' )


/* GET home page. */
router.get('/', (request, response ) => {
  Book.getAllBooks()
    .then( books => {
      response.render('index', {
        books
    })
  })
})

router.get('/createbook', (request, response ) => {
  response.render('createbook')
})

router.post('/createbook/new', (request, response ) => {
  const book = request.body
  Book.createBook(book)
    .then( () => response.redirect('/'))
})

router.get('/details/:id', (request, response ) => {
  let id = request.params.id
  Book.getBook(id)
    .then( books => {
      response.render('details', {
        books
      })
    })
    .catch(error => console.error(error))
})

router.get('/editbook/:id', (request, response ) => {
  let id = request.params.id
  Book.getBook(id)
    .then( books => {
      response.render('editbook', {
        books
      })
    })
    .catch(error => console.error(error))
})

router.post('/editbook/update/:id', (request, response ) => {
  let id = request.params.id
  let book = request.body
  Book.editBook(id, book)
    .then( books => {
      response.redirect('/')
    })
    .catch(error => console.error(error))
})

router.post( '/delete/:id', ( request, response ) => {
  const id = request.params.id
  Book.deleteBook( id )
    .then( () => response.redirect( '/' ) )
})

router.post('/results', ( request, response ) => {
  let { queryString } = request.body
  Book.queryString(queryString)
    .then( results => {
      results = _.flatten(results)
      response.render('index', {
        books:results})
    })
    .catch(error => console.error(error))
})

module.exports = router;
