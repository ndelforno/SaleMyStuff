import React from 'react'
import Computers from '../components/Computers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Categories from '../components/Categories'


class App extends React.Component {
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

  render () {

    var categories = this.state.categories.map((category) => {
      return(
        <Router>
           <div class= "card category" id = {category.name} key={category.id} >
            <nav>
              <h1><Link to= {category.name}> {category.name}</Link></h1>
            </nav>
              <Route path= {category.name} component= {category.name} />
           </div>
         </Router>
        )
    })
    return (
      <div>
        <h1>To do: List of Categories</h1>
          <div class="categories-container">
              {categories}
          </div>
      </div>
    )
  }
}
export default App
