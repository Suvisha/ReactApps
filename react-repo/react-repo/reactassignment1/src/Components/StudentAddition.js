import React, { Component } from 'react';
import InputBox from './InputBox';
import Button from './Button';
class StudentAddition extends Component {
    SignupData()
    {
        
    }
  render() {
    return (
      <div className="container">
      <br/><h1>SignUp Form</h1><br/>
        <InputBox inputtype = "text" placeholder = 'Username' label = 'Username'></InputBox>
        <InputBox inputtype = "password" placeholder = 'password' label = 'Password'></InputBox>
        <InputBox inputtype = "date" placeholder = 'mm/dd/yyyy' label = 'DOB'></InputBox>
        <Button btnName="Signup" onClick=""></Button><br/>
        <a href="/">Display Students</a>
      </div>
    );
  }
}

export default StudentAddition;
