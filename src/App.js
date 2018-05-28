/*Main file to edit the content / Huvudsakliga filen för att redigera innehållet*/


import React, { Component } from 'react';
import Container from './Components/Container';
import LoginForm from './Components/LoginForm';
import Counter from './Components/Counter'; // import from the Counter file 
import './App.css';


//! Our main component!  

class App extends React.Component {
    
    /* login */
    
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

      /* login */
      
       //JSX syntax
      
      let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> You are logged in! </p>
    }
      
     
     
      // Return what´s visable
    return (
        
        /* login*/
        
        <Container>
        { /* counter*/ }
        <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
        { loggedInMessage }
        {
        
           !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
      </Container>
        
    );
  }
}

export default App;
