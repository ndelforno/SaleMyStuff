import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
      'http://localhost:3000/api/v1/users',
      { user:
        {
          user_name: this.state.user_name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
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
          <label for="InputUsername">Username</label>
          <input name="user_name" onChange={this.handleChange.bind(this)} value={this.state.user_name} placeholder="Enter your name" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputEmail">Email</label>
          <input name="email" onChange={this.handleChange.bind(this)} value={this.state.email} placeholder="Enter your email address" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputPassword">Password</label>
          <input type="password" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="password" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputPasswordconfirmation">Confirm your Password</label>
          <input type="password" name="password_confirmation" onChange={this.handleChange.bind(this)} value={this.state.password_confirmation} placeholder="confirm your password" className="form-control"/>
        </div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Sign Up
        </button>
      </div>
    )
  }


}

export default SignUp;
