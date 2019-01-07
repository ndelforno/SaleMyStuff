import React from 'react'
import Computers from '../components/Computers'
import Appliances from '../components/Appliances'
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
           <div className= "card category" id = {category.name} key={category.id} >
            <nav>
              <h1><Link to={`/${category.name}`}> {category.name}</Link></h1>
            </nav>
              <Route path= "/Computers" component= {Computers}/>
              <Route path= "/Appliances" component= {Appliances}/>
           </div>
         </Router>
        )
    })
    return (
      <div>
        <h1>To do: List of Categories</h1>
          <div className="categories-container">
              {categories}
          </div>
      </div>
    )
  }
}
export default App
