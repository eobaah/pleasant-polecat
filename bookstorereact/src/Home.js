import React, { Component } from 'react'
import polecat from '../public/pleasant_polecat.png'
import './App.css'
import Library from './Library'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      searchString: ''
    }
  }

  componentDidMount() {
    this.getAllBooks()
  }

  componentDidUpdate() {
    this.getAllBooks()
  }

  getAllBooks() {
    fetch('http://localhost:5000/all', {
      method: 'get',
    })
    .then( response => response.json() )
      .then(results => this.setState( { books: results } ) )
  }

  getSearchedBooks(input) {
    fetch(`http://localhost:5000/search/${input}`, {
      method: 'get',
    })
    .then( response => response.json() )
      .then(results => this.setState( { books: results } ) )
  }

  handleSearch(event) {
    this.setState( { searchString: event.target.value} )
    this.getSearchedBooks(event.target.value)
  }

  render() {
    let searchString = this.state.searchString,
      books = this.state.books

    return (

      <div className="App">

        <div className="App-header">
          <img src={polecat} className="App-logo" alt="logo" />
          <h2>Pleasant-Polecat-Bookstore</h2>
          <input
                type="text"
                value={searchString}
                onChange={this.handleSearch.bind(this)}
                placeholder="Search"
              />
        </div>

        <div className="row">
          <div>
            <Library books={books} />
          </div>
        </div>

      </div>

    );
  }
}

export default Home;
