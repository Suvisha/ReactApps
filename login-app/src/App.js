import React from "react";
//import {Link,BrosweRouter as Router,Route} from 'react-router-dom';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={username:"", password:""}
    this.handleLogin=this.handleLogin.bind(this);
    this.handleUserChange=this.handleUserChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    /*export var rows = data.map((row) =>
    <div className="Display-items">
      <li> <Link to="/userform" onClick={handleClick.bind(this, row)} target="_blank">{row.name}</Link ></li>
    </div>
  );*/
  }
  handleUserChange(e)
  {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) 
  {
    this.setState({password: e.target.value});
  }
  
  /*RenderList(rows)
  {
    return(
      <div>
      <li> Name &nbsp; &nbsp; Price &nbsp; &nbsp; Picture </li>
      <Router basename={props.path}>
        <div>
          <Route path='/' component={About} />
        </div> 
      </Router>
       {rows}
      </div>
    ); 
  }*/
  render() 
  {
    return (
      <form><br></br>
        <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleUserChange} /><br></br>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br>
        <button type="button" onClick={this.handleLogin}>Login</button><br></br>
      </form>);
  }
  handleLogin() 
  {
    console.log("UserName: " + this.state.username);
    console.log("Password: " + this.state.password);
    if(this.state.username==="Admin"&&this.state.password==="Admin123")
    {
      console.log("correct");
      alert(this.state.username+"Logged In")
    }
    else
    {
      console.log("Invaild User");
    }
  }
}
 /*class userForm extends React.Component
{
    
}*/
export default App;
