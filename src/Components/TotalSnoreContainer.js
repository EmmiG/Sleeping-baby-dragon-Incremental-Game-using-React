import React from 'react';


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