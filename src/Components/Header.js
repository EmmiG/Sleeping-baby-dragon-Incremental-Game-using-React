import React from 'react';

/*login*/

function Header(props){
  return(
    <header>
      <div className="header-login-container">
      <h1 id="logo-title-header">Sleeping baby dragon</h1>
      <div className="header-description">
      <p> <b>Description of the game:</b>
      Sleeping Dragon Increment clicking game is build with react.js. Version 1 will be a image of a dragon where you can click to be able to unlock 5 different upgrades. In the future you will be able to get different costumes and much more to make the clicking more fun. </p> 
      
       </div>
      </div>
    </header>
  );
}

export default Header;