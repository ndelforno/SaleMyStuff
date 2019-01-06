import React, { Component } from 'react';

class Computers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adposts: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/adposts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ adposts: data }) });
  }
  render(){
   var adposts = this.state.adposts.map((adpost) => {
    return(
     <div key={adpost.id}>
      <h1>{adpost.title}</h1>
      <p>{adpost.description}</p>
     </div>
    )
   })
   return(
    <div>
     {adposts}
    </div>
   )
  }
}

export default Computers;
