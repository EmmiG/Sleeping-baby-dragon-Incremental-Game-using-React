
import React from 'react';

/*
    * DragonImage Component Made a standard Component with import with react and always export
    * default at the end.
    * This function is the Dragon image itself which will take the onclick as props to my
    * UserStatsContainer component.
*/

function DragonImage(props) {
/*
    * src= source of which folder and name the image file have
    * alt= if the image aren´t showing it will say what it is by text.
    * onclick= If you click on the dragon this props will active
*/
    
  return (
    <div className="dragon-image-container">
      <img
        id="click-image"
        className="dragon-click-image"
        src="./images/sleepingdragonbasket.png"
        alt="sleeping_baby_dragon_in_basket"
        onClick={props.onDragonClick}
      />
    </div>
  );
}

export default DragonImage;