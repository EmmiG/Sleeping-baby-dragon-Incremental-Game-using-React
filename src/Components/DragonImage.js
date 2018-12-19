
import React from 'react';


function DragonImage(props) {
  return (
    <div className="dragon-image-container">
      <img
        id="click-image"
        className="dragon-click-image"
        src="./images/dragonimage.png"
        alt=""
        onClick={props.onDragonClick}
      />
    </div>
  );
}

export default DragonImage;