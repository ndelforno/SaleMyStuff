import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios'
import AdpostsContainer from '../components/AdpostsContainer'
import Adpost from '../components/Adpost'

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

          <div className= "categories" >
             <div className= "card category" id = {category.name} key={category.id} >
              <nav>
                <h1><Link to={`/${category.name}`} key={category.id} > {category.name} </Link></h1>
              </nav>
             </div>
             <Switch>
              <Route exact path={`/${category.name}`} render={(props) => {return <AdpostsContainer id={category.id}/>}} />
             </Switch>
           </div>

        )
    })
    return (
      <div>
          <div className="categories-container" ref="catontainer">
              {categories}
          </div>
      </div>
    )
  }
}
export default Categories;
