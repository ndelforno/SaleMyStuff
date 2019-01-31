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
      </div>
    )
  }


}

export default SignUp;
