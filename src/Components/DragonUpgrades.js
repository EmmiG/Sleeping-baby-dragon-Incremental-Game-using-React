import React, { Component } from 'react';

/*
    * made a state of timesBought 0 which will mean that as default when the game start it will
    * start on 0 and in the background it will count how many times you have bought an upgrade 
    * item but instead of showing how many times you have bought the item it will instead be more
    * expensive next time you will buy that item.
    * As before we will have the itemCost as the props that it will get from the DragonUpgradesContainer.js
    * component so it can calculate the price the upgrade has right now and be able to update it. 
    * To make the more expensive part each time you buy an upgrade 
*/

class DragonUpgrades extends Component {
 
  constructor(props) {
    super(props);
    this.handleDragonClick = this.handleDragonClick.bind(this);
    this.totalSumPrice = this.totalSumPrice.bind(this);
      
      this.state = {
      timesBought: 0, 
      price: this.props.upgrade.itemCost, 
    };
  }
/*
    * function named totalSumPrice which will have the parameters of itemCost and timesBought 
    * to calculate the base cost itself of the upgrade and make it know it shall make it more
    * expensive next time it has been bought, so needed to multiply the itemCost with timesBought,
    * set the power to 2.00. 
*/
    totalSumPrice(itemCost, timesBought) {
   
    return Math.ceil(itemCost * Math.pow(2.00, timesBought));
  }
/*
    * handleDragonClick function again which I did the same in my ShopUpgrade.js component file
    * to calculate the price itself with the totalSnore the user have to see if the user can buy
    * the upgrade or not.
    * Made a new variable with the name newprice which will calculate the new price and call the
    * totalSumPrice function. It will add by one each time the button is pressed but like I said 
    * before this will be shown in the background so user wont see that it is changed from for
    * instance bought that the upgrade is bought X times as printed on the browser. 
    * After the upgrade is bought the state will be set as well to be incresed by one and update
    * the new price.
*/
    handleDragonClick() {
    let canBuy = this.state.price <= this.props.totalSnore;
    if (!canBuy) {
      return;
    }
        
     this.props.buyDragonUpgrade(this.props.upgrade.snorePerSecond, this.state.price);
        
     let newPrice = this.totalSumPrice(
      this.props.upgrade.itemCost,
      this.state.timesBought + 1
    );
    
        this.setState({
      timesBought: this.state.timesBought + 1,
      price: newPrice,
    });
  }
    
/* 
    * variable upgrade which will hold the props of upgrade.
    * variable for the price and set the price value in the state.
    * variable for the canBuy and set the price itself with the state of if its less than the
    * number of totalSnore you have.
    
    * Return Basket buttons, they will be in default with an image,
    * when you cant buy the upgrade yet and change to available image
    * once you have enough snores to be able to buy it
*/
    render() {

    const upgrade = this.props.upgrade;

    let price = this.state.price;
 
    let canBuy = price <= this.props.totalSnore;

    let className =
      'Dragon-upgrade-basket-button' + (canBuy ? '' : 'disabled');
        
     return (
      <button className={className} onClick={this.handleDragonClick}>
        <div className="upgrade-basket">
          <div className="basket-image-container col-xs-3 col-sm-3 col-lg-3">
            <img src={upgrade.image} className="upgrade-image" alt="" />
          </div>

          <div className="upgrades-names-container col-xs-7 col-sm-6 col-lg-7 ">
            <p className="upgrade-name">{upgrade.name}</p>
            <p className="basket-cost">
              {' '}
              {price}
            </p>
          </div>

         
        </div>
      </button>
    );
  }
}

export default DragonUpgrades;
    
    
    
    
    
        