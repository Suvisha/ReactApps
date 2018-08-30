import React from 'react';
import './App.css';
import InputBox from './InputBox';
import Button from './button';
class App extends React.Component {
 
  handleLogin(e)
  {
    console.log("UserName: " + this.props.username);
    console.log("Password: " + this.props.password);
    if(this.props.username==="Admin"&&this.props.password==="Admin123")
    {
      console.log("correct");
      alert(this.state.username+"Logged In")
    }
    else
    {
      console.log("Invaild User");
    }
  }
  render() 
  {
    return(
      <div className="App-Allign">
        <div className="col-25 ">
          <label className="label">
             User Name :
          </label> 
        </div> 
        <InputBox Data="UserName" type="text" onChange="onChange" value1="value1"> </InputBox><br></br>
        <div className="col-25 ">
          <label className="label">          
             Password  : 
          </label>  
          </div>
        <InputBox Data="Password" type="password" onChange="onChange" value1="value1"> </InputBox><br></br>
        <Button name="Login" onClick={this.handleLogin}> </Button>
        <Button name="SignUp"></Button>
      </div>    
    );
  }
}
export default App;
