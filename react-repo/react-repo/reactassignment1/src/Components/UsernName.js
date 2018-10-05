import React, { Component } from 'react';
import InputBox from './InputBox';

class UsernName extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:null,
            usrnameerror:""       
        }
        this.handleUserName = this.handleUserName.bind(this);
    }
    handleUserName(value)
    {
        if(value!=="")
        {
            console.log(value);
            this.setState({username:value});
            this.props.username(value);
            this.setState({usrnameerror:""});
        }
        else{
            this.setState({usrnameerror:"*User name is required"});
        }
    }
  render() {
    return (
        <InputBox type="text" 
                  placeholder="Username" 
                  handleValue={this.handleUserName} 
                  error={this.state.usrnameerror}>
        </InputBox>
    );
  }
}

export default UsernName;
