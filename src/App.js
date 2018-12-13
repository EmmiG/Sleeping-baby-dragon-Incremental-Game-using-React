/*Main file to edit the content / Huvudsakliga filen för att redigera innehållet*/


import React, { Component } from 'react';
import Header from './Components/Header';
import MasterContainer from './Components/MasterContainer';
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

/* Default add 1 point for a click */ 

DefaultPoint = () => {
    this.setState({ clicks: this.state.clicks + 1 });
}
/* Level 2 = Crystal ball, add 2 points for a click */ 
CrystalBall = () => {
    this.setState({ clicks: this.state.clicks + 2 });
    
}

/* Level 3 = Dragon Closet, add 5 points for a click */

DragonCloset = () => {
    this.setState({ clicks: this.state.clicks + 5 });
    
}

/* Level 4 = Dragon Gem Box, add 10 points for a click */

DragonGemBox = () => {
    this.setState({ clicks: this.state.clicks + 10 });
    
}

/* Level 5 = Treasure Chest, add 2 points for a click */

TreasureChest= () => {
    this.setState({ clicks: this.state.clicks + 20 });
    
}

/* Level 6 = Helping Spirit, add 2 points for a click */

HelpingSpirit = () => {
    this.setState({ clicks: this.state.clicks + 50 });
    
}

/* If the user don´t wanna see how many clicks they have done so far they can click this button to make it go away. */

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
         <MasterContainer>
        { /* header*/ }
        
        <div>
         <Header />
        </div>
        
        
        { /* login form*/ }
        
       
        
        <div id="login-form">
        
          { loggedInMessage }
        {
        
           !this.state.loggedIn && <LoginForm handleLogin={this.handleLogin} />
        }
        
        <div className="clear"></div>
        
        </div>
        
    
       
        { /* click controller, creating the buttons */ }
                        { /* Ökning */ }
        
        <div id="upgrade-level">
        { /* Default level Click to add by one */ }
        <button className="bubble-image" onClick={this.DefaultPoint}> Click to add by 1</button>
        { /* level 2 = Crystal ball, Click to add by 2 */ }
        <button onClick={this.CrystalBall}> Click to add by 2</button>
        { /* level 3 = Dragon Closet, Click to add by 5 */ }
        <button onClick={this.DragonCloset}> Click to add by 5</button>
        { /* level 4 = Dragon Gem Box, Click to add by 10 */ }
        <button onClick={this.DragonGemBox}> Click to add by 10</button>
        { /* level 5 = Treasure Chest, Click to add by 20 */ }
        <button onClick={this.TreasureChest}> Click to add by 20</button>
        { /* level 6 = Helping Spirit, Click to add by 50 */ }
        <button onClick={this.HelpingSpirit}> Click to add by 50</button>
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
      
      </MasterContainer>
        
    );
  }
}



export default App;


