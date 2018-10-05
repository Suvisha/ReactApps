import React from 'react';

class Button extends React.Component{
    constructor(props)
    {
        super(props);
        this.onclickbtn = this.onclickbtn.bind(this);
    }
    onclickbtn()
    {
        this.props.onClickBtn();
    }
    render()
    {
        return (
            <div>
                <input type = "button" className="btn btn-primary" onClick={this.onclickbtn} value={this.props.btnName}/>
            </div>
        );
    }
}

export default Button;