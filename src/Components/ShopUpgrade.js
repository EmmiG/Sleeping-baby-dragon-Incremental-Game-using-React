import React, { Component } from 'react';


class ShopUpgrade extends Component {
 
  constructor(props) {
    super(props);
    this.handleDragonClick = this.handleDragonClick.bind(this);

    // Local state
    this.state = {
      sold: false, // Every shop item have a default state as 0 at the start of the game.
      available: false, // Every shop item is 'locked' rather unavailable at the start of the game.
      price: this.props.itemCost, // Item cost.
    };
  }

  
  handleDragonClick() {
    if (this.state.sold) {
      return;
    }

      
      /* Making a variable with the name canBuy, this state will check if the user can buy the item upgrade or not. If it´s false it will return and you cant buy if its smaller than the price set*/
    let canBuy = this.state.price <= this.props.totalSnore;
    if (!canBuy) {
      return;
    }

    // buyShopItem function is called in MasterContainer.
    this.props.buyShopItem(this.props.multiply, this.state.price);

    this.setState({
      sold: true,
    });
  }

  render() {
   
    let price = this.state.price;
    
    let canBuy = price <= this.props.totalSnore;

    
    let className = '';
    if (this.state.sold) {
      className = 'sold-upgrade-button';
    } else {
      className =
        'available-upgrade-button' + (canBuy ? '' : 'disabled');
    }

    // Returning the HTML div container and button elements, assigning the className,
    // onClick and the props name sent from the PlayerStatsContainer Component.
    return (
      <div className="col-sm-3 shop-button-container">
        <button className={className} onClick={this.handleDragonClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default ShopUpgrade;