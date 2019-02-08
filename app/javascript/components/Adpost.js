import React, { Component } from 'react'
import axios from 'axios'

class Adpost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adpost: ""
    };
  }

  componentDidMount(){
    axios.get('/api/v1/adposts/'+ this.props.id)
    .then(response => {
      console.log(response)
      this.setState({adpost: response.data})
    })
    .catch(error => console.log(error))
  }


}
export default Adpost;
