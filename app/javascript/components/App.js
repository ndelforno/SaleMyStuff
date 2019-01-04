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
        <div>
          <h1>React here</h1>
          <Categories />
        </div>
    )
  }
}
export default App
