import React, { Component } from 'react'
// import { Link } from 'react-router'

class NewBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
      genre: '',
      image_url: ''
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    console.log('state', this.state);
  }

  newBook = (event) => {
    event.preventDefault()

    console.log('state?', this.state);

    fetch('http://localhost:5000/new', {
      method: 'post',
      body:  JSON.stringify({ book: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
  }

  // newBook(event) {
  //   event.preventDefault()
  //
  //   fetch('http://localhost:5000/new', {
  //     method: 'post',
  //     body: JSON.stringify( this.state ),
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     })
  //   })
  // }

  render() {

    return (
      <div >
        <form className="form" onSubmit={this.newBook}>
          <label className="label">
            Author:
            <input className="createImput" type="text" name="author" onChange={this.handleInputChange} value={this.state.author}/>
            Title:
            <input className="createImput" type="text" name="title" onChange={this.handleInputChange} value={this.state.title}/>
            Genre:
            <input className="createImput" name="genre" onChange={this.handleInputChange} value={this.state.genre}/>
            Image:
            <input className="createImput" name="image_url" onChange={this.handleInputChange} value={this.state.image_url}/>
            Description:
            <textarea className="createImput" rows='4' name="description" onChange={this.handleInputChange} value={this.state.value}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* <Link onClick={this.newBook} >
          <button>Button</button>
        </Link> */}

      </div>
    )
  }
}

export default NewBook
