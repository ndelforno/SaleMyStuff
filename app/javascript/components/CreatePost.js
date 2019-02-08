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
      user_id: 1,
      category_id: '',
      address: '',
      image: '',
    };
  }

  componentDidMount(){
    axios.get('/api/v1/categories.json')
    .then(response => {
      console.log(response)
      this.setState({categories: response.data, category_id: response.data[0].id})
    })
    .catch(error => console.log(error))
  }


  handleFileChange(event) {
    this.setState({image: event.target.files[0]})
  }


  handleChange(event) {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleClick = event => {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.set("title", this.state.title);
    bodyFormData.set("description", this.state.description);
    bodyFormData.set("price", this.state.price);
    bodyFormData.set("user_id", this.state.user_id);
    bodyFormData.set("category_id", this.state.category_id);
    bodyFormData.set("address", this.state.address);
    bodyFormData.append('image', this.state.image)
    axios({
    method: 'post',
    url: '/api/v1/adposts',
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render(){

    var categories = this.state.categories.map((category) => {
      return(
          <option type="radio" value={category.id}  name="category" key={category.id} >{category.name}</option>
      )
    })

    return (
      <div>
        <h2>Create your Posting</h2>
        <form >
          <div className="form-group">
            <label for="InputTitle">Title</label>
            <input name="title" onChange={this.handleChange.bind(this)} value={this.state.title} placeholder="Enter the title" className="form-control"/>
          </div>
          <div className="form-group">
            <label>
              Choose your category:
              <select value={this.state.category_id} onChange={this.handleChange.bind(this)} name="category_id"  >
                {categories}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label for="InputDescription">Description</label>
            <input name="description" onChange={this.handleChange.bind(this)} value={this.state.description} placeholder="Enter the description" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="InputPrice">Price</label>
            <input type="number" name="price" onChange={this.handleChange.bind(this)} value={this.state.price} placeholder="Enter the Price" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="InputImage">Image</label>
            <input type="file" name="image" onChange={this.handleFileChange.bind(this)}/>
          </div>
          <div className="form-group">
            <label for="InputAdress">Address</label>
            <input type="text" name="address" onChange={this.handleChange.bind(this)} value={this.state.address} placeholder="Enter the Adress" className="form-control"/>
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
