// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const User = require('../database/db').User
//
// const paramsOptions = { usernameField: 'email' }
//
// const findUser = (email, password) => {
//   return User.find( email, password )
// }
//
// const findUserByID = id => {
//   return User.findById( id )
// }
//
// const strategy = new LocalStrategy ( paramsOptions, (email, password, done) => {
//   findUser( email, password )
//     .then( user => {
//       if (user === null) {
//         done( null, false, {message: 'wrong!'} )
//       }
//       else {
//         done(null, user)
//       }
//     })
//     .catch( error => done( error ) )
// })
//
// passport.use( strategy )
//
// passport.serializeUser( (id, done) => done( null, user.id) )
//
// passport.deserializeUser( (id, done) => {
//   findUserById( id )
//     .then( user => done( null, user) )
//       .catch( error = > done( error, null) )
// })
//
// module.export = passport
