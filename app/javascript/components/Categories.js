import React, { Component } from 'react';

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/categories.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ categories: data }) });
  }

  render(){

    var categories = this.state.categories.map((category) => {
      return(
         <div>
          <h1>{category.name}</h1>
         </div>
        )
    })

    return(
      <div>
        <h1>To do: List of Categories</h1>
        {categories}
      </div>
      )
    }
}
export default Categories;
