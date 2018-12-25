/* Will contain information from: DragonImage , UserName , TotalSnoreContainer, ShopUpgrade */

import React from 'react';
import UserName from './UserName.js';
import DragonImage from './DragonImage.js';
import TotalSnoreContainer from './TotalSnoreContainer.js';
import ShopUpgrade from './ShopUpgrade.js';



function UserStatsContainer(props) {
  return (
    <div className="user-stats-container col-xs-12 col-md-6 order-md-2">
      {/* UserName component, with props for email */}
      <UserName email={props.email} />
      {/* DragonImage component, with props for handleClicks function */}
      <DragonImage onDragonClick={props.handleDragonClick} />
      
        <TotalSnoreContainer
        totalSnore={props.totalSnore}
        snorePerSecond={props.snorePerSecond}
      />
      
      
      <h1 className="shop-header-title">SHOP ITEMS</h1>
      <p className="shop-description">
        Select the available item to upgrade and get more Zzz per click. 
      </p>
      <div className="row multiplier-row">
        {/* 5 shop upgrades */}
      
        <ShopUpgrade
          itemCost={50}
          name="Crystal Ball"
          multiply={2}
          buyShopItem={props.buyShopItem}
          totalSnore={props.totalSnore}

        />
        
         {/* Unlock clicks add by 5, in the future version of this game it will unlock costumes */}
        <ShopUpgrade
          itemCost={300}
          name="Dragon Closet"
          multiply={5}
          buyShopItem={props.buyShopItem}
          totalSnore={props.totalSnore}
        />
        {/* Unlock clicks add by 10, in the future version of this game it will unlock background color change and random background color change */}
        <ShopUpgrade
          itemCost={2500}
          name="Dragon Gem Box"
          multiply={10}
          buyShopItem={props.buyShopItem}
          totalSnore={props.totalSnore}
        />
      
        <ShopUpgrade
          itemCost={5000}
          name="Treasure Chest"
          multiply={20}
          buyShopItem={props.buyShopItem}
          totalSnore={props.totalSnore}
        />
       {/* Unlock clicks add by 50, it will unlock autoclicker*/}
        <ShopUpgrade
          itemCost={10000}
          name="Helping Spirit"
          multiply={50}
          buyShopItem={props.buyShopItem}
          totalSnore={props.totalSnore}
        />
      </div>
   
    </div>
  );
}

export default UserStatsContainer;