// const express = require('express')
// const app = express()
// const cors = require('cors')
// const pgp = require('pg-promise')
// const bodyParser = require('body-parser')
// const Books = require('./db.js')
// const User = require('../database/db').User
// const passport = require('./passport')
// const authOptions = {
//   successRedirect: '/',
//   failureRedirect: 'users/login'
// }
//
// app.use( bodyParser.json() )
// app.use( bodyParser.urlencoded({ extended: false}) )
// app.use( cors() )
//
// app.use(session({secret: 'secret', cookie: {} }))
// app.use( passport.initialize() )
// app.use( passport.session() )
//
// router.get('/signup', (request, response, next) => {
//   response.render('signup', (request, response, next) => {
// })
//
// app.post('/signup', (request, response, next) => {
//   const {email, password} = request.body
//
//   User.createOne(email, password)
//     .then( user => {
//       request.login( {
//         id: user.id,
//         email
//       }, error => {
//         if (error) {
//           next(error)
//         }
//         response.redirect('/')
//       })
//     })
//     .catch( error => {
//       response.render('signup', {
//         message: 'authentification failed'
//       })
//     })
// })
//
// router.get('/login', (request, response, next) => {
//   response.render('login')
// })
//
// app.post('/login', passport.authenticate('local', authOptions) )
//
// app.get( '/logout', (request, response) => {
//   request.logout()
//   response.redirect('/')
// })
//
// module.exports = app
