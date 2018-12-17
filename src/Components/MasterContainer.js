//import React from 'react';
import React, { Component } from 'react';
/* Will contain information from: UpgradeContainer, UserStatsContainer */

import UserStatsContainer from './UserStatsContainer.js';

/* login */

class MasterContainer extends Component {
  
    
  constructor(props) {
    super(props);

    
  }
   



render() {
    return (
      <div className="master-container container">
        <div className="row">
          <UserStatsContainer
            email={this.props.email}
          
          />
          
        </div>
      </div>
    );
  }
}


export default MasterContainer;