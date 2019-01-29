/* 
    * Will contain information from: DragonUpgradesContainer, UserStatsContainer
    * MasterContainer will be the base container in the game, import in
    * App.js and Render it out to the webbsite for us to see it on the browser
    * Import Footer.js Component
    
*/
import React, { Component } from 'react';
import UserStatsContainer from './UserStatsContainer.js';
import DragonUpgradesContainer from './DragonUpgradesContainer.js';
import Footer from './Footer.js';

/* 
    *Default state to be set to totalSnore 0 and snorePerSecond also to 0.
    *counter which will add by 1 as default to took in a multiply state as well.
*/

class MasterContainer extends Component {
  
    
  constructor(props) {
    super(props);
      
    this.state = {
      totalSnore: 0,
      snorePerSecond: 0,
      multiply: 1, 
    };
      
/* 
    * bind means: When you call a callback(click on a button for instance)
    * and if you not have bind it can lose its context or/and the *this*
    * value and also write out undefined in the console.
    * bind the handleDragonClick so that it will be able
    * to update and get all context so it wont lose it. 
    * bind the function buyShopitem which will explain above the function what it does.
    * bind the function buyDragonUpgrade which will explain above the function what it does.
*/ 
      
this.handleDragonClick = this.handleDragonClick.bind(this);
this.buyShopItem = this.buyShopItem.bind(this);
this.buyDragonUpgrade = this.buyDragonUpgrade.bind(this);

}
    
/*
    * handleDragonClick function with a this.setstate which will count
    * out totalSnore + muliply itself when an user click on the image.
*/
    
handleDragonClick() {
    this.setState({
      totalSnore: this.state.totalSnore + this.state.multiply,
    });
  }
   
/*
    * function named buyShopItem which have the parameters of multiply
    * and costItem, which will have the state to count out the total clicks
    * and define with how much the upgrade will cost, to make sure the user
    * can buy the item, which is calculated in the ShopUpgrade file.
    * return the buyShopItem in the UserStatsContainer component.
*/
    
  buyShopItem(multiply, costItem) {
    this.setState({
      totalSnore: this.state.totalSnore - costItem,
      multiply: multiply,
    });
  }
/*
    * function named buyDragonUpgrade which have the parameters of 
    * snorePersecond and cost, did a setstate of totalSnore minus the cost,
    * which will be called when an user press on any of the buttons for
    * instance sleeping pills. Those buttons will be shown once the other
    * shoping buttons arent avialable anymore for instance Crystal Ball you
    * can just buy once but those buttons you will be able to buy as many
    * times you want and then the price will go up each time to make it more
    * expensive and harder to come by. It will then subtract the cost of the totalSnore.
    * It will set the totalSnore to a new setting after it have substract the cost itself.
    * Set the snorePerSecond state to the setting that were passed as the snorePerSoncond
    * parameter, also using the state.snorePerSecond.
*/

buyDragonUpgrade(snorePerSecond, cost) {
    this.setState({
      totalSnore: this.state.totalSnore - cost,
      snorePerSecond: this.state.snorePerSecond + snorePerSecond,
    });
  }
   
/*
    * componentDidMount. Its the last step in the Birth/Mount life cycle phase,
    * this method is called once all our children Elements and our Component 
    * instances are mounted onto the Native UI. componentDidUpdate() is invoked
    * immediately after updating occurs.This method is not called for the initial
    * render. Only called one time, Unlike our other Birth/Mount methods,
    * where we start at the top and work down, componentDidMount() works from the
    * bottom up. I first set a timer which will add one snore every second that will
    * be called once the timePerSecond is called up.
*/
    
   componentDidMount() {
    this.timeSet = setInterval(() => this.timePerSecond(), 1000);
  }
    
/*
    * componentwillunmount () which will clean up the componentDidMount
    * and those will be always added like a mirror to each other,
    * in this case it will clean up the timer that I set.
*/

  componentWillUnmount() {
    clearInterval(this.timeSet);
  }
    
/*
    * timePerSecond function which will set the state of totalSnore to become
    * totalSnore + snorePerSecond and in doing so it will increase the
    * totalSnore amount every second.
*/

  timePerSecond() {
    this.setState({
      totalSnore: this.state.totalSnore + this.state.snorePerSecond,
    });
  }
   
/*
    * return some divs with a className, Get the UserStatsContainer component
    * from a different file and print out the states for handleDragonClick
    * ,totalSnore, snorePerSecond. 
    * The email is also outprinted and the buyShopItem.
    
    * In render I created a new component output that will print out the state
    * of totalSnore from the DragonUpgradeContainer.js component file and also
    * the props buyDragonUpgrade.
    * Render out the Footer.js Component

*/
    
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
        <Footer />
      </div>
        
    );
  }
}


export default MasterContainer;