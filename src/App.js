/*Main file to edit the content / Huvudsakliga filen för att redigera innehållet*/


import React, { Component } from 'react';
import Header from './Components/Header';
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
      loggedInMessage = <p id="loggedIn"> You are logged in!, Welcome dragoness390 </p>
    }
      
     
     
      // Return what´s visable
    return (
         <Container>
        { /* header*/ }
        
        <div>
         <Header />
        </div>
        
        
        { /* login*/ }
        
       
        
        <div id="login-form">
        
          { loggedInMessage }
        {
        
           !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
        
        <div className="clear"></div>
        
        </div>
        
    
        { /* level */ }
        
        <div id="upgrade-level">
        
        <p> level </p>
        
        </div>
        
        { /* shop */ }
        
        <div id="upgrade-shop">
        
        <p> shop </p>
        
        </div>
        
        
        { /* counter*/ }
        <div id="counter-of-clicks">
        <Counter />
        <Counter />
        <Counter />
      </div>
      
      </Container>
        
    );
  }
}

export default App;
