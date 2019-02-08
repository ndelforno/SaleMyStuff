import React, { Component } from 'react'
import axios from 'axios'

class Adpost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adpost: "",
      user: ""
    };
  }

  componentDidMount(){
    axios.get('/api/v1/adposts/'+ this.props.id)
    .then(response => {
      console.log(response)
      this.setState({adpost: response.data, user:response.data.user})
    })
    .catch(error => console.log(error))
  }

  render () {
    return(
      <div className="adpost">
        <div className="row">
          <div className="col-lg-6">
            <h1>{this.state.adpost.title} </h1>
            <h2>{this.state.adpost.price} $</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={this.state.adpost.image_url} />
            <p> {this.state.adpost.description} </p>
            <p> {this.state.user.email}</p>
            <p id="address">{this.state.adpost.address} </p>
          </div>
          <div className="col-lg-3" id="mapid" data-role="main" className="ui-content"></div>
        </div>
      </div>
    )

  }


}
export default Adpost;
