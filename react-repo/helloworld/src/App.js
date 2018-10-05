import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';
import Employees from './Employees';

class App extends Component {

      render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
          <div>
            <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={App} />
                  <Route exact path='/Login' component={Employees} />
               </Switch>
          </div>
        );
      }
}
export default App;