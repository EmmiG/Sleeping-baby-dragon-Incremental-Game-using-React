/*Main file to edit the content / Huvudsakliga filen för att redigera innehållet*/


import React, { Component } from 'react';
import Container from './Components/Container';
import LoginForm from './Components/LoginForm';
import './App.css';


//! Our main component!  

class App extends Component {
    
    state = {
    loggedIn: false,
    email: ''
  }

logout = () => {
    this.setState({ loggedIn: false });
  }

handleLogin = (email, password) => {
    this.setState({ loggedIn: true, email: email });
  }

  render() {
      
       //JSX syntax
      
      let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> You are logged in! </p>
    }
      
     
     
      // Return what´s visable
    return (
        
        <Container>
        { loggedInMessage }
        {
        
           !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
      </Container>
        
       
    );
  }
}

export default App;
