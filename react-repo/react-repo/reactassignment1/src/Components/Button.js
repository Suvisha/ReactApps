import React from 'react';

class InputBox extends React.Component{
    constructor(props)
    {
        super(props);
        this.onClickBtn = this.onClickBtn.bind(this);
    }
    onClickBtn()
    {
        this.props.onClickBtn();
    }
    render()
    {
        return (
        <div className="form-group">
            <button className="btn btn-primary" onClick={this.onClickBtn}>{this.props.value}</button><br/>
            <label className="text-danger">{this.props.error}</label><br />
        </div>
        );
    }
}

export default InputBox;