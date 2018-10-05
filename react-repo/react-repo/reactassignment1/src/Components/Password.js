import React, { Component } from 'react';
import InputBox from './InputBox';

class Password extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            password:null,
            passworderror:""       
        }
        this.handlepassword = this.handlepassword.bind(this);
    }
    handlepassword(value)
    {
        if(value!=="")
        {
            console.log(value);
            this.setState({password:value});
            this.props.password(value);
            this.setState({passworderror:""});
        }
        else{
            this.setState({passworderror:"*Password is required"});
        }
    }
  render() {
    return (
        <InputBox type="password" 
                  placeholder="Password" 
                  handleValue={this.handlepassword} 
                  error={this.state.passworderror}>
        </InputBox>
    );
  }
}

export default Password;
