import React from 'react';

/*
    * Shown as the first page you see in the game
    * Header tag with a header-login container.
    * A div with a className wrapping in an image tag.
    * Sleeping baby dragon logo have an id.
    * The dragon-logo id also have a className.
    * src= source where you find the image in a special folder.
    * alt = if the image aren´t showing it will say what it is by text.
    
    * header-title will be a as a wrapper around the description title
    * and explain of how the Increment clicking game works.
    * End the header tag.
    * Always have an import beginning and export end in react when you create
    * a Component.
*/

function Header(props){
  return(
    <header>
      <div className="header-login-container">
      
       <div className="logo-header">
      <img
        id="dragon-logo"
        className="sleeping-dragon-logo"
        src="./images/sleepingdragonlogo.png"
        alt="Baby_dragon_image"
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