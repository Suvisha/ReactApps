import React from "react";

class Signup extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={username:"", password:"",email:"",formErrors:"",emailValid:"",passwordValid:"",name1:"",value1:""}
    this.handleLogin=this.handleLogin.bind(this);
    this.handleUserChange=this.handleUserChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
  }
  handleUserChange(e)
  {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) 
  {
    this.setState({password: e.target.value});
  }
  handleEmailChange(e)
  {
      this.setState({email:e.target.value});
  }
  render() 
  {
    return (
      <form><br></br>
        <input type="text" name={this.state.name1} placeholder="UserName" value={this.state.username} onChange={this.handleUserChange} value1={this.props.value}/><br></br>
        <input type="password" name={this.state.name1} placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br>
        <input type="email" name={this.state.name1} placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/><br></br>
        <button type="button" onClick={this.handleLogin}>Submit</button><br></br>
      </form>);
  }
  handleLogin() 
  {
    if(this.state.username&&this.state.password&&this.state.email)
    {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch(this.state.name1) 
      {
        case 'email':
            emailValid = this.state.value1.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'password':
            passwordValid = this.state.value1.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
        default:
            break;
      }
      this.setState({formErrors: fieldValidationErrors, emailValid: emailValid,passwordValid: passwordValid }, this.validateForm);
      
    }
    else
      alert("Enter full datas");
  }
  validateForm() 
      {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
}
export default Signup;
