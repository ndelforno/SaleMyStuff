import React from 'react'
import Computers from '../components/Computers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Categories from '../components/Categories'


class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <div class="categories-container">
            <div class= "card category" id = "Computers" >
              <h1><Link to= "/Computers">Computers</Link></h1>
            </div>
            <Route path= "/Computers" component= {Computers} />
          </div>
          
        </div>
      </Router>
    )
  }
}
export default App
