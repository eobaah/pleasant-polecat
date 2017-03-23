import React, { Component } from 'react'
import { Link } from 'react-router'

class Library extends Component {

  render() {

    const books = this.props.books

    const bookCovers = books.map( book =>
      <Link to={{pathname: '/details/' + book.book_id, query: book.book_id}} key={book.book_id} className="tile">
        <img src={book.image_url}  alt="broken" />
      </Link>
    )

    return (
      <div className="row__inner">
          {bookCovers}
      </div>
    )
  }
}

export default Library
