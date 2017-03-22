import React, { Component } from 'react'
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
    console.log('books', this.state.books)
    this.getSearchedBooks(event.target.value)
  }

  render() {
    let searchString = this.state.searchString,
      books = this.state.books

    return (

        <div>

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
