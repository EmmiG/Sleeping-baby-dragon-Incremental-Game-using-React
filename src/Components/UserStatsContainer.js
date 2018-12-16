/* Will contain information from: DragonImage , UserName , TotalClickContainer, Counter */

/*import React from 'react';
import UserName from './UserName.js';
import DragonImage from './DragonImage.js';
import TotalClickContainer from './TotalClickContainer.js';
import Counter from './Counter.js';*/









function UserStatsContainer(props) {
  return (
    <div className="user-stats-container col-xs-12 col-md-6 order-md-2">
      {/* UserName component, with props for email */}
      <UserName email={props.email} />
      {/* DragonImage component, with props for handleClicks function */}
     /* <DragonImage onDragonClick={props.handleClicks} />
      {/* TotalClicksContainer component, passing props to display the number of totalClicks 
          and the number of ClicksPerSecond */}
      /*<TotalClickContainer
        totalClicks={props.totalClicks}
        ClicksPerSecond={props.ClicksPerSecond}
      />
      */
        
      </div>
    </div>
  );
}

export default UserStatsContainer;