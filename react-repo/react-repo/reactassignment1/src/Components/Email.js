import React, { Component } from 'react';
import InputBox from './InputBox';

class Email extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email:null,
            emailerror:""       
        }
        this.handleemail = this.handleemail.bind(this);
    }
    handleemail(value)
    {
        if(value!=="")
        {
            console.log(value);
            this.setState({email:value});
            this.props.email(value);
            this.setState({emailerror:""});
        }
        else{
            this.setState({emailerror:"*Email is required"});
        }
    }
  render() {
    return (
        <InputBox type="email" 
                  placeholder="email" 
                  handleValue={this.handleemail} 
                  error={this.state.emailerror}>
        </InputBox>
    );
  }
}

export default Email;
