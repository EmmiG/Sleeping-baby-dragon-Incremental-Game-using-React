//import React from 'react';
/* Will contain information from: DragonUpgradesContainer, UserStatsContainer  */
import React, { Component } from 'react';
import UserStatsContainer from './UserStatsContainer.js';
import DragonUpgradesContainer from './DragonUpgradesContainer.js';

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
this.buyDragonUpgrade = this.buyDragonUpgrade.bind(this);

    
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

buyDragonUpgrade(snorePerSecond, cost) {
    this.setState({
      totalSnore: this.state.totalSnore - cost,
      snorePerSecond: this.state.snorePerSecond + snorePerSecond,
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
          <DragonUpgradesContainer
            totalSnore={this.state.totalSnore}
            buyDragonUpgrade={this.buyDragonUpgrade}
          />
        </div>
      </div>
    );
  }
}


export default MasterContainer;