import React, { Component } from 'react';

class Appliances extends Component {
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
      <h1>{adpost.price}</h1>
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

export default Appliances;
