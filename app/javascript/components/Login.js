import React, { Component } from 'react'
import axios from 'axios'

class Login extends React.Component {

  currentUser () {
    return fetch(`${baseUrl}/api/v1/current_user`, {
      credentials: 'include'
    }).then(res => res.json())
  }

  logout () {
    return fetch(`${baseUrl}/api/v1/auth`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json())
  }

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
    var bodyFormData = new FormData();
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("password", this.state.password);
    axios({
      method: 'post',
      url:'api/v1/authentication',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then(response => {
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
