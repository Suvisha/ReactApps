import React,{Component} from 'react';

class Employes extends Component{
    constructor(props){
        super(props);
        this.state =
        {
            emploees:[[]]
        }
    }
    getData()
    {
         fetch("http://localhost:64390/Employee/GetAll").then(res=> res.json()).then(data => this.setState((state) => (this.emploees = data)));
    }
    render()
    {
        this.getData();
      console.log(this.state.emploees);
    return (<ul>{this.state.emploees+"Hello"}</ul>);
    }
}
export default Employes;