import React, { Component } from 'react';
import InputBox from './InputBox';

class DOB extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dob:null,
            doberror:""       
        }
        this.handledob = this.handledob.bind(this);
    }
    handledob(value)
    {
        if(value!=="")
        {
            console.log(value);
            this.setState({dob:value});
            this.props.dob(value);
            this.setState({doberror:""});
        }
        else{
            this.setState({doberror:"*User name is required"});
        }
    }
  render() {
    return (
        <InputBox type="date" 
                  placeholder="dob" 
                  handleValue={this.handledob} 
                  error={this.state.doberror}>
        </InputBox>
    );
  }
}

export default DOB;
