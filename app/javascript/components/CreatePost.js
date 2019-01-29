import React, { Component } from 'react'
import axios from 'axios'

class CreatePost extends React.Component {

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

  addNewPost = () => {
    axios.post(
      'http://localhost:3000/api/v1/adposts',
      { adpost:
        {
          title: '',
          description: '',
          price: '',
          user_id: '',
          category_id: '',
          address: '',
          image: '',
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
        <div key={category.id}>
          {category.name}
          <input type="radio" name="categoryButton" ref="category" key={category.id}/>
        </div>
      )
    })

    return (
      <div>
        <h2>Create your Posting</h2>
        <div className="form-group">
          <label for="InputTitle">Title</label>
          <input ref="title" placeholder="Enter the title" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputCategory">Category</label>
          {categories}
        </div>
        <div className="form-group">
          <label for="InputDescription">Description</label>
          <input ref="description" placeholder="Enter the description" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputPrice">Price</label>
          <input type="number" ref="Price" placeholder="Enter the Price" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="InputImage">Image</label>
          <input type="file" ref="Image"/>
        </div>
        <div className="form-group">
          <label for="InputAdress">Adress</label>
          <input type="text" ref="Adress" placeholder="Enter the Adress" className="form-control"/>
        </div>
        <button className="btn btn-primary"
          onClick={this.addNewPost} >
          New Post
        </button>
      </div>
    );
  }
}

export default CreatePost;
