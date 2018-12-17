/* Main file to edit the content */


import React, { Component } from 'react';
import MasterContainer from './Components/MasterContainer';
//import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
//import UserName from './Components/UserName';
import './App.css';


//! Our main component!  

class App extends React.Component {
    
   /* login */ 
    /* login */
    state = {
    loggedIn: false,
    email: ''
  }

    /* login */
logout = () => {
    this.setState({ loggedIn: false });
  }

/* login */
handleLogin = (email, password) => {
    this.setState({ loggedIn: true, email: email });
  }

    
    
    
 /* click controller */ 

constructor(props){
    super(props);
    
    
     
    /* Binding to the handleLogin function so that we will see the state when a user logs in.
    */  
  this.handleLogin = this.handleLogin.bind(this);  
    
}
    
    
handleLogin(email) {
    this.setState({
      email: email,
      loggedIn: true,
    });
  }

  /* In render, check if the user is logged in. If so, return
  ** the Main container and include the player's name in the 
  ** rendered HTML content.
  ** If loggedIn is false, display the LoginForm to the user (via 
  ** LoginForm component).
  */
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <MasterContainer email={this.state.email} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoginForm handleLogin={this.handleLogin} />
        </div>
      );
    }
      
      /* login */
      
       //JSX syntax
      /*
      let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p id="loggedIn"> You are logged in!, Welcome {this.state.email} </p>
        /* this.state.email = that it react on the same page. props.email = means the same thing but will work from a different location/file.*/
  }    
    

    
}




export default App;


