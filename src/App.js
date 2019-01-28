/* 
* App.js will be for the Login handling
*/

import React from 'react';
import MasterContainer from './Components/MasterContainer';
import LoginForm from './Components/LoginForm';
import './App.css';


class App extends React.Component {


    state = {
    loggedIn: false,
    email: ''
  }

/* 
    * login false will log the user out
*/

logout = () => {
    this.setState({ loggedIn: false });
  }

/*
    * A function that will check if the user is logged in by its email,
    * if its true it will display in the MasterContainer,
    * if its false it will be displayed in the LoginForm.
*/

handleLogin = (email, password) => {
    this.setState({ loggedIn: true, email: email });
  }


constructor(props){
    super(props);
    
/* 
* Binding to the handleLogin function so that we will see the state when a user logs in.
*/ 
    
  this.handleLogin = this.handleLogin.bind(this);
    
}
    
    
handleLogin(email) {
    this.setState({
      email: email,
      loggedIn: true,
    });
  }

/* 
  * In render, check if the user is logged in. If so, return
  * the MasterContainer and include the player's name in the 
  * rendered HTML content.
  * If loggedIn is false, display the LoginForm to the user (via 
  * LoginForm Component).
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
      
  }    
       
}



export default App;


