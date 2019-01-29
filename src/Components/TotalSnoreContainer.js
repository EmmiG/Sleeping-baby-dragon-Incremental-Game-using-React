import React from 'react';

/*
    * Standard react Component,which return some divs with some text and the 
    * props with a counter of totalSnore and  counter snore per second which
    * will be displayed in the UserStatsContainer. 
*/

function TotalSnoreContainer(props) {
  return (
    <div className="total-snore-container">
      <p className="total-snore-counter">
        Total snores: <span className="counter">{props.totalSnore}</span>
      </p>
      <p className="snore-per-second-counter">
        Zzzz per second: {props.snorePerSecond}
      </p>
    </div>
  );
}

export default TotalSnoreContainer;