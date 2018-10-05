import React, { Component } from 'react';
import Button from './Button'
import UsernName from './UsernName';
import Email from './Email';
import DOB from './DOB';
class AddStudent extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username: null,
      password: null,
      email:null,
      dob:null,
      error:'',
      check:false
   }
   this.handleUserName = this.handleUserName.bind(this);
   this.handlePassword = this.handlePassword.bind(this);
   this.handleEmail = this.handleEmail.bind(this);
   this.handleDOB = this.handleDOB.bind(this);
   this.onClickBtn = this.onClickBtn.bind(this);
  }
  handleUserName(value)
  {
    this.setState({username:value});
  }
  handlePassword(value)
  {
    this.setState({password:value});
  }
  handleEmail(value)
  {
    this.setState({email:value});
  }
  handleDOB(value)
  {
    this.setState({dob:value});
  }
  onClickBtn()
  {
    if(this.state.username!==null && 
       this.state.password!=null && 
       this.state.email!=null &&
       this.state.dob!=null
      )
    {
      this.props.history.push("/");
    }
    else{
      this.setState({error:"Something is missing...please chack the form again"})
    }
  }
  render() {
    return (
      <div className="container">
        <br/><h3>Signup Form</h3><br/>
        <UsernName username={this.handleUserName}></UsernName>
        <Email email={this.handleEmail}></Email>
        <DOB dob={this.handleDOB}></DOB>
        <Button value="Signup" onClickBtn={this.onClickBtn} error={this.state.error}></Button>
        <label>Not have account?<a href="/">Create An account?</a></label>
      </div>
    );
  }
}

export default AddStudent;
