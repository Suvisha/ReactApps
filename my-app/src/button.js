import React from 'react';
import './button.css';

class Button extends React.Component
{
    constructor (props) 
    {
      super(props);
      this.state = {showModal: false, name:""};
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    } 
    handleOpenModal () 
    {
      this.setState({ showModal: true });
    }
    handleCloseModal () 
    {
      this.setState({ showModal: false });
    }
    handleLogin(e)
  {
    console.log("UserName: " + e.props.username);
    console.log("Password: " + e.props.password);
    if(this.props.username==="Admin"&&this.props.password==="Admin123")
    {
      console.log("correct");
      alert(this.state.username+"Logged In")
    }
    else
    {
      console.log("Invaild User");
    }
  }
    render()
    {
      return(
          <div>
            <button type="submit" onClick={this.handleLogin} className="buttonProp" > {this.props.name} </button>
            {/* <PrintProvider>
              <button type="submit" onClick={this.handleOpenModal} className="buttonProp" > {this.props.name} </button>
              <Modal isOpen={this.state.showModal}>
                <Print >
                  <div className="modal-page-design">
                     <h2>About Me:</h2>
                  </div>
                </Print>
                <button className="buttonProp" onClick={this.handleCloseModal}>Close</button>
              </Modal>
            </PrintProvider> */}
          </div>
      );
    }
    
}
export default Button;