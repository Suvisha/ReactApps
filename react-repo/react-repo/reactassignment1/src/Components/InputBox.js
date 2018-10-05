import React from 'react';

class InputBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleValue = this.handleValue.bind(this);
    }
    handleValue(e)
    {
        this.props.handleValue(e.target.value);
    }
    render()
    {
        return (
        <div className="form-group">
            <label>{this.props.placeholder}</label>
            <input type={this.props.type} placeholder={this.props.placeholder} onBlur={this.handleValue} className="form-control col-lg-5"/>
            <label className="text-danger">{this.props.error}</label>
        </div>
        );
    }
}

export default InputBox;