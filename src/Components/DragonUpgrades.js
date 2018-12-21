import React, { Component } from 'react';



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
    
    
    totalSumPrice(itemCost, timesBought) {
   
    return Math.ceil(itemCost * Math.pow(2.00, timesBought));
  }
    
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
    
    
    
    
    
        