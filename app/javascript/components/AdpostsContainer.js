import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Adpost from '../components/Adpost'


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
      <div className="card">
        <div className="card-body" >
          <img className="card-img-top" src={adpost.image_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"> {adpost.title} <span>{adpost.price}$</span> </h5>
            <p className="card-text">{adpost.description}</p>
            <button className="btn btn-primary" >
              <Link to={`/adposts/${adpost.id}`} key={adpost.id}>
              See Posting
              </Link>
            </button>
          </div>
        </div>
        <Route path={`/adposts/${adpost.id}`} render={(props) => <Adpost id={adpost.id}/>} />
      </div>
    )

    return (
      <Router>
        <div className="row">
          {adpostsList}
        </div>
      </Router>
      )
  }

}
export default AdpostsContainer;
