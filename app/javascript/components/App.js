import React from 'react'
import Computers from '../components/Computers'
import Appliances from '../components/Appliances'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Categories from '../components/Categories'
import axios from 'axios'


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>To do: List of Categories</h1>
          <div className="categories-container">
              <Categories />
          </div>
      </div>
    )
  }
}
export default App
