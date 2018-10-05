import React from 'react';

class InputBox extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {data: 'Initial data...'}
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) 
    {
        this.setState({data: e.target.value});
        this.props.handleValue(this.state.data);
    }
    render()
    {
        return (
            <div className="form-group col-lg-5">
                <label>{this.props.label}:</label>
                <input type = {this.props.inputtype} placeholder = {this.props.placeholder} className="form-control" onChange={this.updateState}/>
            </div>
        );
    }
}

export default InputBox;