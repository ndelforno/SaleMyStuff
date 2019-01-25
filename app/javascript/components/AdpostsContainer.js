import React, { Component } from 'react'
import axios from 'axios'


class AdpostsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adposts: []
    };
  }
  componentDidMount(){
    axios.get('/api/v1/categories/'+ this.props.id)
    .then(response => {
      console.log(response)
      this.setState({adposts: response.data.adposts})
    })
    .catch(error => console.log(error))
  }

  render () {
    let adpostsList = this.state.adposts.map(adpost =>
      <div className="card-body" >
        <img className="card-img-top" src={adpost.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title"> {adpost.title} <span>{adpost.price}$</span> </h5>
          <p className="card-text">{adpost.description}</p>
          <a href="" className="btn btn-primary">See posting</a>
        </div>
      </div>
    )

    return (
      <div className="row">
        {adpostsList}
      </div>
      )
  }

}
export default AdpostsContainer;
