import React, { Component } from 'react';
import InputBox from './InputBox';
import Button from './Button';
class Signup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           username: '',
           password: '',
           email: '',
           dob: ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
     };
    handleUserName(value) 
    {
        this.setState({username: value});
    }
    handlePassword(value) 
    {
        this.setState({password: value});
    }
    handleEmail(value) 
    {
        this.setState({email: value});
    }
    handleDOB(value) 
    {
        this.setState({dob: value});
    }
    render() 
    {
        return (
            <div className="container">
                <br/><h1>SignUp Form</h1><br/>
                <InputBox inputtype = "text" placeholder = 'Username' label = 'Username' handleValue={this.handleUserName}></InputBox>
                {this.state.username}
                <InputBox inputtype = "password" placeholder = 'password' label = 'Password' handleValue={this.handlePassword}></InputBox>
                {this.state.password}
                <InputBox inputtype = "date" placeholder = 'mm/dd/yyyy' label = 'DOB' handleValue={this.handleDOB}></InputBox>
                {this.state.dob}
                <InputBox inputtype = "email" placeholder = 'abc@xyz.com' label = 'Email' handleValue={this.handleEmail}></InputBox>
                {this.state.email}
                <Button btnName="Signup" onClick=""></Button><br/>
                <label>Already have account?<a href="/">Login</a></label>
            </div>
        );
    }
}

export default Signup;
