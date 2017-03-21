import React, { Component } from 'react';

class Library extends Component {


  render() {

    const books = this.props.books

    const bookCovers = books.map( (book, index) =>
        <img className="tile" key={index} src={book.image_url}  alt="broken" />
    )

    return (
      <div>
          {bookCovers}
      </div>
    )
  }
}

export default Library
