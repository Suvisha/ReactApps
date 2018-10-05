import React, { Component } from 'react';
import InputBox from './InputBox';
import Button from './Button';
class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       username: '',
       password: ''
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.usrCheck = this.usrCheck.bind(this);
  };
  handleUserName(value) {
      this.setState({username: value});
  }
  handlePassword(value) {
      this.setState({password: value});
  }
  usrCheck()
  {
    if(this.state.username==="admin" && this.state.password==="admin")
    {
      alert("hiii");
    }
    else{
        alert("username or password incorrect");
    }
  }
  render() {
    return (
      <div className="container">
      <br/><h1>Login</h1><br/>
        <InputBox inputtype = "text" placeholder = 'Username' label = 'Username' handleValue={this.handleUserName}></InputBox>
        {this.state.username}
        <InputBox inputtype = "password" placeholder = 'password' label = 'Password'  handleValue={this.handlePassword}></InputBox>
        {this.state.password}
        <Button btnName="Login" onClickBtn={this.usrCheck}></Button><br/>
            <label>Not have account?<a href="/signup">Create An account?</a></label>
      </div>
    );
  }
}

export default Login;
