import React, { Component } from 'react'
import axios from 'axios'

class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      title: '',
      description: '',
      price: '',
      user_id: '',
      category_id: '',
      address: '',
      image: '',
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

  handleChange = event => {
    this.setState({
      title: event.target.value,
      description: event.target.value,
      price: event.target.value,
      user_id: event.target.value,
      category_id: event.target.value,
      address: event.target.value,
      image: event.target.value,
      });
  }

  handleClick = event => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/api/v1/adposts',
      { adpost:
        {
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          user_id: this.state.user_id,
          category_id: this.state.category_id,
          address: this.state.address,
          image: this.state.image,
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render(){

    var categories = this.state.categories.map((category) => {
      return(
          <option type="radio" name="categoryButton" value={category.id} ref="category" key={category.id}>{category.name}</option>
      )
    })

    return (
      <div>
        <h2>Create your Posting</h2>
        <form>
          <div className="form-group">
            <label for="InputTitle">Title</label>
            <input ref="title" onChange={this.handleChange} placeholder="Enter the title" className="form-control"/>
          </div>
          <div className="form-group">
            <label>
              Choose your category: 
              <select value={this.state.value} onChange={this.handleChange}>
                {categories}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label for="InputDescription">Description</label>
            <input ref="description" onChange={this.handleChange} placeholder="Enter the description" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="InputPrice">Price</label>
            <input type="number" ref="Price" onChange={this.handleChange} placeholder="Enter the Price" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="InputImage">Image</label>
            <input type="file" ref="Image" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="InputAdress">Adress</label>
            <input type="text" ref="Adress" onChange={this.handleChange} placeholder="Enter the Adress" className="form-control"/>
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
