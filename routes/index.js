const express = require('express');
const router = express.Router();
const _ = require( 'lodash' )
const Books = require( '../database/database').Books
const moment = require( 'moment' )


/* GET home page. */
router.get('/', (request, response ) => {
  Books.getAllBooks()
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
  Books.createBook(book)
    .then( () => response.redirect('/'))
})

router.get('/details/:id', (request, response ) => {
  let id = request.params.id
  Books.getBook(id)
    .then( books => {
      response.render('details', {
        books
      })
    })
    .catch(error => console.error(error))
})

router.get('/editbook/:id', (request, response ) => {
  let id = request.params.id
  Books.getBook(id)
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
  Books.editBook(id, book)
    .then( books => {
      response.redirect('/')
    })
    .catch(error => console.error(error))
})

router.post( '/delete/:id', ( request, response ) => {
  const id = request.params.id
  Books.deleteBook( id )
    .then( () => response.redirect( '/' ) )
})

router.post('/results', ( request, response ) => {
  let { queryString } = request.body
  Books.queryString(queryString)
    .then( results => {
      results = _.flatten(results)
      response.render('index', {
        books:results})
    })
    .catch(error => console.error(error))
})

module.exports = router;
