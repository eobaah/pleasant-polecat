import React, { Component } from 'react'
import InlineEdit from 'react-edit-inline'
import { Link } from 'react-router'

class BookDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    this.getBook(this.props.params.book_id)
  }

  getBook = (input) => {
    fetch(`http://localhost:5000/${input}`, {
      method: 'get',
    })
    .then( response => response.json() )
    .then(results => this.setState( { book: results } ) )
  }

  editBook = (data, field) => {
    let book = this.state.book
    console.log('field', field)

    book.author = data.message

    fetch(`http://localhost:5000/${book.book_id}/${field}`, {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ input: data.message })
    })
      .then( response => response.json() )
      .then( results => {
        console.log('results', results)
         this.setState( { author: results } )
       } )
  }

  removeBook = () => {
    let book = this.state.book
    fetch(`http://localhost:5000/delete/${book.book_id}`, {
      method: 'delete',
    })
      // .then( () => this.getAllItems() )
  }

  render() {
    const book = this.state.book
    const fieldsList = Object.keys(book).slice(1)
    const inlineEdits = fieldsList.map( fieldName => {
      return (
        <InlineEdit
          activeClassName="editing"
          text={book[fieldName]}
          paramName="message"
          change={ data => this.editBook(data, fieldName) }
          key={fieldName}/>
      )
    })

    return (
      <div>
        <p>{inlineEdits[1]}</p>
        <h2>{inlineEdits[0]}</h2>
        <p>{inlineEdits[3]}</p>
        <img src={book.image_url}  alt="broken" />
        <p>Description</p>
        <p>{inlineEdits[2]}</p>
        <Link to='/'><button>Home</button></Link>
        <Link to='/' onClick={this.removeBook}><button>Delete</button></Link>
      </div>
    )
  }
}

export default BookDetails
