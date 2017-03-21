import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './Library'

class App extends Component {
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

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Pleasant-Bookstore</h2>
          </div>

          <input
                type="text"
                value={searchString}
                onChange={this.handleSearch.bind(this)}
                placeholder="Search"
              />

          <div className="row__inner">
            <Library books={books} />
          </div>

        </div>








      // <div className="contain">
      //
      //
        // <div className="App">
        //   <div className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h2>pleasant-bookstore</h2>
        //   </div>
        //   <div>
        //     insert books here
        //   </div>
        // </div>
      //
      //   <div className="row">
      //     <div className="row__inner">
      //
      //       {/* <Book books={this.state.books} /> */}
      //
      //       <div className="tile">
      //         <div className="tile__media">
      //        The real image went here
      //           {/* <Book books={this.state.books} /> */}
      //         </div>
      //
      //         <div className="tile__details">
      //            <div className="tile__title">
      //              Top Gear
      //            </div>
      //         </div>
      //       </div>
      //     </div>
      //
      //   </div>
      //
      // </div>
    );
  }
}

export default App;
