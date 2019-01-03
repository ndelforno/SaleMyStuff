import React from 'react'
import Computers from '../components/Computers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>Hello World</h1>
          <nav>
          <Link to="">Appliances</Link>{' '}
          <Link to="">Cars-Trucks</Link>{' '}
          <Link to="">Books</Link>{' '}
          <Link to="">Video-games</Link>{' '}
          <Link to="">Furnitures</Link>{' '}
          <Link to="/Computers">Computers</Link>{' '}
          <Link to="">Electronics</Link>{' '}
          <Link to="">Motorcycle</Link>{' '}
          <Link to="">Cell Phone</Link>{' '}
          <Link to="">Bikes</Link>{' '}
          <Link to="">Tickets</Link>
          </nav>
          <Route path="/Computers" component={Computers}/>
        </div>
      </Router>
    )
  }
}
export default App
