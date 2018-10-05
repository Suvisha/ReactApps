import React from 'react';
import axios from 'axios'
import TeacherHome from './TeacherHome';
//import { Cookies } from 'react-cookie'

export default class Login extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
          validCredentials:false,
          loggedData:[],
          sessionData:[],
          hits:null
      }
      this.onLoginClick=this.onLoginClick.bind(this);
      this.checkLoginCredentials= this.checkLoginCredentials.bind(this)
    }
   

    onLoginClick()
    {
        const teacherLoginData = document.getElementById("LoginData").value
        console.log(teacherLoginData)
        const uname = document.getElementById("userName").value
        const pw =document.getElementById("password").value
        axios.get("http://localhost:8080/viewTeacher")
        .then(res=>res)
        .then(row => {
                this.checkLoginCredentials(row.data,uname,pw)
                     }) 
    }

checkLoginCredentials(fetchedData,uname,pw)
{
    for(let i=0;i<fetchedData.length;i++)
    {
        console.log(fetchedData[1].userName)
        if(uname===fetchedData[i].userName && pw===fetchedData[i].password)
        {
          let teacherData=[]
          this.setState({validCredentials:!this.state.validCredentials})
          this.setState({loggedData:fetchedData[i]})
          console.log(this.state.loggedData)
          console.log("success")
          sessionStorage.setItem(teacherData,JSON.stringify(this.state.loggedData))
          this.setState({sessionData: sessionStorage.getItem(teacherData)})
          //document.getElementById("TeacherHome").innerHTML = sessionStorage.getItem(teacherData);
          console.log(this.state.sessionData)
          this.props.history.push("/TeacherHome")
          return <TeacherHome teacherData={this.state.loggedData}/>
        }
        return this.state.validCredentials
    }
}
    onSignUpClick()
    {
        this.props.history.push("/Registration")
    }



    render()
    {
        /*if(this.state.validCredentials === true){
            return <TeacherHome teacherData={this.state.loggedData}/>
        }*/
        return(
        <div id="LoginData" className="LoginPage">
            <label>User Name:</label>
            <input id="userName" type="text"  placeholder="User Name" ref={node => this.input = node}></input>
            <br/>
            <label>Password:</label>
            <input id="password" type="password" placeholder="New password"></input>
            <br/>
            <button onClick={this.onLoginClick}>Login</button><br/><br/>
            <a href="/"> Home </a><br/><br/>
            <a href="/Registration">Registration</a>      
        </div>
        )
    }
   
}