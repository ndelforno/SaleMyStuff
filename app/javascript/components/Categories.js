import React, { Component } from 'react';
import Computers from '../components/Computers'
import Appliances from '../components/Appliances'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios'
import AdpostsContainer from '../components/AdpostsContainer'

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount(){
    axios.get('/api/v1/categories.json')
    .then(response => {
      console.log(response)
      this.setState({categories: response.data})
    })
    .catch(error => console.log(error))
  }

  render () {

    var categories = this.state.categories.map((category) => {
      return(
        <Router>
           <div className= "card category" id = {category.name} key={category.id} >
            <nav>
              <h1><Link to={`/${category.name}`} key={category.id}> {category.name}</Link></h1>
            </nav>
            <Route path={`/${category.name}`} render={(props) => <AdpostsContainer id={category.id}/>} />
           </div>
         </Router>
        )
    })
    return (
      <div>
          <div className="categories-container">
              {categories}
          </div>
      </div>
    )
  }
}
export default Categories;
