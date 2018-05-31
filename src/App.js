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

 /* click controller */ 

constructor(props){
    super(props);
    this.state = {
        clicks: 0,
        show:true
    };
}

DefaultPoint = () => {
    this.setState({ clicks: this.state.clicks + 1 });
}

UpgradePoint = () => {
    this.setState({ clicks: this.state.clicks + 2 });
    
}

ToggleClick = () => {
    this.setState({ show: !this.state.show});
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
        
    
       
        { /* click controller */ }
        
        <div id="upgrade-level">
        
        <button onClick={this.DefaultPoint}> Click to add by 1</button>
        <button onClick={this.UpgradePoint}> Click to add by 2</button>
         <button onClick={this.ToggleClick}>
        
        {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        
        
        { this.state.show ? <h2> { this.state.clicks }</h2> : ''}
        
         { /* level */ } 
        
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
        
        <div id="default-dragon">
        <p> Sleeping/waking baby dragon animation </p> 
        </div>
      
      </Container>
        
    );
  }
}

export default App;
