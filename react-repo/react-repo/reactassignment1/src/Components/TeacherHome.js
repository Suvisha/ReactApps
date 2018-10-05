import React, { Component } from 'react';
import Button from './Button';
class TeacherHome extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
      <div>
          <center>
              <br /><br />
            <Button value="List of students" onClickBtn={this.ListStudent} error=""/>
            <Button value="Add Student" onClickBtn={this.AddNew} error=""/>
          </center>
      </div>
    );
  }
}

export default TeacherHome;
