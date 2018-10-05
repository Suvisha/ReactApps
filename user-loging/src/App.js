import React, { Component } from 'react';
import './App.css';
import Loging from "./loging";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signup from './signup';
import Home from './Home';
import userDetails from './userDetails';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/loging'}>Loging</Link></li>
            <li><Link to={'/signup'}>signup</Link></li>
         </ul>
         <hr />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/loging' component={Loging} />
            <Route exact path='/userDetails' component={userDetails} />
            <Route exact path='/signup' component={Signup} />
         </Switch>
      </div>
   </Router> 
    );
  }
}

export default App;
