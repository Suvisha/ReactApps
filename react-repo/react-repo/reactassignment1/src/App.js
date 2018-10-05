import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import TeacherHome from './Components/TeacherHome';
import AddStudent from './Components/AddStudent';
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Student Management System</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/TeacherHome" component={TeacherHome} />
            <Route exact path="/AddStudent" component={AddStudent} />
            <Route exact path="/ListStudent" component={TeacherHome} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
