//import React from 'react';
import React, { Component } from 'react';
/* Will contain information from: UpgradeContainer, UserStatsContainer */

import UserStatsContainer from './UserStatsContainer.js';

/* login */

class MasterContainer extends Component {
  
    
  constructor(props) {
    super(props);
      
    this.state = {
      totalSnore: 0,
      snorePerSecond: 0,
      multiply: 1,
    };
      
      
this.handleDragonClick = this.handleDragonClick.bind(this);

    
  }
    
    
handleDragonClick() {
    this.setState({
      totalSnore: this.state.totalSnore + this.state.multiply,
    });
  }
   



render() {
    return (
      <div className="master-container container">
        <div className="row">
          <UserStatsContainer
          handleDragonClick={this.handleDragonClick}
            email={this.props.email}
            totalSnore={this.state.totalSnore}
         snorePerSecond={this.state.snorePerSecond}
          
          />
          
        </div>
      </div>
    );
  }
}


export default MasterContainer;