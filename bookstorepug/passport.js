const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./database/database').User

const paramsOptions = {
  usernameField: 'email'
}

const findUser = (email, password) => {
  return User.find( email, passowrd )
}

const findUserById = id => {
  return User.findById( id )
}

const strategy = new LocalStrategy( paramsOptions, ( email, password, done ) => {
  findUser( email, password )
    .then( user => {
      if(user === null ) {
        done( null, false, { message: 'Incorrect email or password fool!'})
      } else {
        done( null, user )
      }
    })
    .catch( error => done( err ) )
})

passport.use( strategy )
