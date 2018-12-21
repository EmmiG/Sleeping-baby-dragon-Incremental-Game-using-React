import React, { Component } from 'react';
import DragonUpgrades from './DragonUpgrades.js';

const basketInventory = [
  {
    name: 'Sleeping Pills',
    itemCost: 15,
    snorePerSecond: 1,
    image: 'images/',
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

class DragonUpgradeContainer extends Component {
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
    return (
      <div className="upgrade-container col-xs-12 col-md-6 order-md-1">
        <h1 className="basket-header-title">Basket</h1>
        {/* Displaying each upgrade row */}
        <div>{slots} </div>
      </div>
    );
  }
}

export default DragonUpgradeContainer;