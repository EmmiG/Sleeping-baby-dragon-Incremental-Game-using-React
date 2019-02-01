import React, { Component } from 'react';
import DragonUpgrades from './DragonUpgrades.js';

/*
    * Goal for the DragonUpgradesContainer Component: container that displayed a basket
    * with different upgrades which will rise in price when bought.
    * Once any upgrade is bought it will automaticly make the snore go up every
    * 2 second so you dont need to click as much. 
*/

/*
    * made a list of upgrades which is avialable once the other upgrades in the
    * ShopUpgrades.js component which is shown in the UserStatsContainer.js 
    * component is sold out. As before I created the name of the upgrade, itemCost
    * but also added an image its blank for now because I dont have an image but
    * it will be in the images folder later.
*/

const basketInventory = [
  {
    name: 'Sleeping Pills',
    itemCost: 15,
    snorePerSecond: 1,
    image: 'images/pills.png',
  },
  {
    name: 'Soft Music',
    itemCost: 50,
    snorePerSecond: 10,
    image: 'images/',
  },
  {
    name: 'Comfy Blanket',
    itemCost: 150,
    snorePerSecond: 20,
    image: 'images/',
  },
  {
    name: 'Aroma Candles',
    itemCost: 300,
    snorePerSecond: 70,
    image: 'images/',
  },
  {
    name: 'Fluffy Pillow',
    itemCost: 500,
    snorePerSecond: 100,
    image: 'images/',
  },
];

/*
    * Made a class of DragonUpgradeContainer which will map all the
    * slot rows as and array and return it with index. I get the 
    * DragonUpgrades.js component and you have to set the key and the index
    * itself so the index will get updated when one buys a basket item.
    * Added the props of buyDragonUpgrade and totalSnore.
*/

class DragonUpgradesContainer extends Component {
  render() {
    let slots = [];

    slots = basketInventory.map((upgrade, index) => {
      return (
        <DragonUpgrades
          key={index}
          upgrade={upgrade}
          buyDragonUpgrade={this.props.buyDragonUpgrade}
          totalSnore={this.props.totalSnore}
        />
      );
    });

/*
    * After that I return a div className called upgrade-container with 
    * a header called basket-header-title which is a h1 then another div
    * that contain the row slots and it will display the list here.
*/
    return (
      <div className="upgrade-container col-xs-12 col-md-6 order-md-1">
        <h1 className="basket-header-title">Basket</h1>
         <p className="upgrade-description">
         Buy these items it will make the Zzz go up every 2 second automaticly so you dont need to click as much, will be more expensive each time you buy it.</p>
        {/* Displaying each upgrade row */}
        <div>{slots} </div>
      </div>
       
    );
  }
}

export default DragonUpgradesContainer;