import React, { Component } from 'react';

/*
    * this.state with sold which is set to false which will mean that every shop
    * item have a default state as 0 at the start of the game.
    * available false which will mean that every shop item is ”locked” and unvailable 
    * at the start of the game. 
    * price will have the props of itemCost, On each upgrade it will have a different
    * itemCost which is shown more in the UserStatsContainer.
    * bind the function handleDragonClick which will explain above the function what it does.
*/

class ShopUpgrade extends Component {
 
  constructor(props) {
    super(props);
    this.handleDragonClick = this.handleDragonClick.bind(this);

/*
    * Local state
*/
    this.state = {
      sold: false,
      available: false,
      price: this.props.itemCost, 
    };
}

/* 
    * handleDragonClick function  with the state sold so it can look if it is sold or not
    * The function is also called in the MasterContainer.js Component.
*/

  handleDragonClick() {
    if (this.state.sold) {
      return;
}

/* 
    * Making a variable with the name canBuy, this state will check if the user can buy
    * the item upgrade or not. If it´s false it will return and you cant buy if its
    * smaller than the price set.
*/
      
    let canBuy = this.state.price <= this.props.totalSnore;
    if (!canBuy) {
      return;
}
      
/*
    * set so the buyShopItem function is called in the MasterContainer and used the props 
    * multiply and got the state price. Set it to true so if its sold works.
*/

    this.props.buyShopItem(this.props.multiply, this.state.price);

    this.setState({
      sold: true,
    });
}

/*
    * variable of price which will mean the state price. Another variable named canBuy
    * which will calculate the price and if it is smaller than the totalclicks
    * in my case totalSnore or equal to the totalSnore you already have,
    * you can buy the shop item upgrade. Another variable named className
    * which will have an empty string. If its sold it will show the sold button
    * if not it will go to the else statement but will go into the styling
    * more after the functions is done, but for now I created names of the classes.
*/
    
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

/*
    * Returning the HTML div container with a classname and used col to to make styling columns in the mobile
    * and tablet version.
    * Button elements which will be used when an user click on the button itself also took with
    * the props of name sent from the UserStatsContainer.js Component to be able to get the
    * names for the upgrades for instance Crystal Ball.
*/
      
    return (
      <div className="col-sm-3 col-md-6 shop-button-container">
        <button className={className} onClick={this.handleDragonClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default ShopUpgrade;