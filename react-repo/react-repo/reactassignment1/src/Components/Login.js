import React, { Component } from 'react';
import Button from './Button';
import UsernName from './UsernName';
import Password from './Password';
class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       username: null,
       password: null,
       error:''
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.usrCheck = this.usrCheck.bind(this);
    //this.validcheck = this.validcheck.bind(this);
  };
  handleUserName(value) {
      this.setState({username: value});
  }
  handlePassword(value) {
      this.setState({password: value});
  }
  usrCheck()
  {
    if(this.state.username!==null && this.state.password!==null)
    {
      this.props.history.push('/TeacherHome');
    }
    else{
      this.setState({error:"Please fill the above fields"})
    }
  }
  render() {
    return (
      <div className="container">
      <br/><h3>Login</h3><br/>
        <UsernName username={this.handleUserName}/>
        <Password password={this.handlePassword}/>
        <Button value="Login" onClickBtn={this.usrCheck} error={this.state.error}></Button><br/>
        <label>Not have account?<a href="/signup">Create An account?</a></label>
      </div>
    );
  }
}

export default Login;
