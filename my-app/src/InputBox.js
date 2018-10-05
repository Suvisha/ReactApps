import  React,{ Component } from 'react';
class InputBox extends Component {
  constructor(props)
  {
    super(props);
    this.state = { Data:"",
                  type:"",
                  value1:"",
                  onChange:"",
                  username:"",
                  password:""};
    this.handleUserChange=this.handleUserChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleonChange=this.handleonChange.bind(this);
  }
  render() 
  {
    return (
        <div>        
        <input type={this.props.type} placeholder={this.props.Data}  onChange={this.handleonChange} value1={this.state.value1}></input>
        </div>
    );
  }
  handleonChange(e)
  {
    
    if(this.props.Data==="UserName")
    {
      this.setState({onChange:e.handleUserChange});
      console.log(this.state.username);
    }
    else if(this.props.Data==="Password")
    {
      this.setState({onChange:e.handlePasswordChange});
      console.log(this.state.password);
    }
  }
  handleUserChange(e)
  {
    this.setState({username:e.target.value});
    this.setState({value1: this.state.username});
    console.log("userchange");
  }
  handlePasswordChange(e)
  {
    this.setState({password:e.target.value});
    this.setState({value1:this.state.password});
    console.log("passwordchange");
  }
  
}

export default InputBox;
