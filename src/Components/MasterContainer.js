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
      
 /* Bind */     
this.handleDragonClick = this.handleDragonClick.bind(this);
this.buyShopItem = this.buyShopItem.bind(this);

    
  }
    
/* */   
handleDragonClick() {
    this.setState({
      totalSnore: this.state.totalSnore + this.state.multiply,
    });
  }
   

 /* */
  buyShopItem(multiply, costItem) {
    this.setState({
      totalSnore: this.state.totalSnore - costItem,
      multiply: multiply,
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
         buyShopItem={this.buyShopItem}
          
          />
          
        </div>
      </div>
    );
  }
}


export default MasterContainer;