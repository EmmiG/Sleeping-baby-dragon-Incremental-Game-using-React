import React from 'react';

/*login*/

function Header(props){
  return(
    <header>
      <div className="header-login-container">
      
       <div className="logo-header">
      <img
        id="dragon-logo"
        className="sleeping-dragon-logo"
        src="./images/sleepingdragonlogo.png"
        alt=""
      />
    </div>
      
      <div className="header-title">
      <h1 id="header-description-title">Description of the game:</h1>
      </div>
      <div className="header-description">
      <p id="description-game"> 
      Sleeping Dragon Increment clicking game is build with react.js. 
      Version 1 will be an image of a dragon where you can click to be able to unlock 5 different upgrades. 
      In the future you will be able to get different costumes and much more to make the clicking more fun. </p> 
      
       </div>
      </div>
    </header>
  );
}

export default Header;