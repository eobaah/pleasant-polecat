import React, { Component } from 'react'

class Signup extends Component {
  render() {

    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <label>Email</label>
          <input type="text" name="email"/>
          <label>Password</label>
          <input type="text" name="password"/>
          <button type="submit" value="Submit"></button>
        </form>
      </div>
    )
  }
}

export default Signup
