import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Categories from '../components/Categories'
import About from '../components/About'
import CreatePost from '../components/CreatePost'
import axios from 'axios'


class App extends React.Component {
  render () {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CreatePost">Create a Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route exact path="/" component={Categories} />
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    )
  }
}
export default App
