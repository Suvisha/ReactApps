import React from "react";
import { browserHistory } from 'react-router';

class Loging extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={username:"", password:""}
    this.handleLogIn=this.handleLogIn.bind(this);
    this.handleUserChange=this.handleUserChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
  }
  handleUserChange(e)
  {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) 
  {
    this.setState({password: e.target.value});
  }
  render() 
  {
    return (
      <form><br></br>
      <div >
        <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleUserChange} /><br></br>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br>
        <button type="button" onClick={this.handleLogIn}>Login</button>
      </div>
      </form>);
  }
  handleLogIn() 
  {
    if(this.state.username==="Admin"&&this.state.password==="Admin1")
    {
      browserHistory.push('/userDetails');
    }
    else
    {
      alert("Invaild User");
    }
  }
}
export default Loging;
