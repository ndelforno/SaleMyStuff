import React, { Component } from 'react'
import axios from 'axios'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleClick = event => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/api/v1/sessions',
      { user:
        {
          email: this.state.email,
          password: this.state.password,
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div>
        <h2>Sign-Up</h2>
        <div className="form-group">
          <label for="InputEmail">Email</label>
          <input name="email" onChange={this.handleChange.bind(this)} value={this.state.email} placeholder="Enter your email address" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputPassword">Password</label>
          <input type="password" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="password" className="form-control"/>
        </div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Login
        </button>
      </div>
    )
  }


}

export default Login;
