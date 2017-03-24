import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import BookDetails from './BookDetails'
import NewBook from './NewBook'
import FourOhFour from './FourOhFour'
import Login from './Login'
import Signup from './Signup'

class App extends Component {

  render() {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
          <Route path='/details/:book_id' component={BookDetails} />
          <Route path='/new' component={NewBook} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='*' component={FourOhFour} />
        </Router>
    )
  }
}

export default App;
