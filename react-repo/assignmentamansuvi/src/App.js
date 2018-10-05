import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Signup' component={Signup} />
         </Switch>
      </div>
   </Router>
    );
  }
}

export default App;
