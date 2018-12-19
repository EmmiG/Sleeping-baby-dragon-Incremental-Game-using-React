/* Will contain information from: DragonImage , UserName , TotalClickContainer, Counter */

import React from 'react';
import UserName from './UserName.js';
import DragonImage from './DragonImage.js';
import TotalSnoreContainer from './TotalSnoreContainer.js';




function UserStatsContainer(props) {
  return (
    <div className="user-stats-container col-xs-12 col-md-6 order-md-2">
      {/* UserName component, with props for email */}
      <UserName email={props.email} />
      {/* DragonImage component, with props for handleClicks function */}
      <DragonImage onDragonClick={props.handleDragonClick} />
      
        <TotalSnoreContainer
        totalSnore={props.totalSnore}
        snorePerSecond={props.snorePerSecond}
      />
        
      
    </div>
  );
}

export default UserStatsContainer;