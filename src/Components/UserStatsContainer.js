
import React from 'react';
import UserName from './UserName.js';
import DragonImage from './DragonImage.js';
import TotalSnoreContainer from './TotalSnoreContainer.js';
import ShopUpgrade from './ShopUpgrade.js';

/*
    * function that returned a div which has the UserName Component will
    * take the props value from the email that was submitted from the LoginForm.js.
    * DragonImage Component, with props from handleDragonClick function.
    * Return from the TotalSnoreContainer component with the props totalSnore
    * and snorePerSecond. 
    * ShopUpgrade component the itemCost, how much the upgrade will add by clicks,
    * and take with the props of buyShopItem and totalSnore.
    * When you have clicked for instance 50 clicks you can buy the first upgrade
    * which is named Crystal Ball and it will then define 50 from your totalSnore
    * meaning total clicks, it will also add by 2 instead of the normal one click
    * each time.

*/

function UserStatsContainer(props) {
  return (
    <div className="user-stats-container col-xs-12 col-md-6 order-md-2">
      <UserName email={props.email} />
      <DragonImage onDragonClick={props.handleDragonClick} />
      
        <TotalSnoreContainer
        totalSnore={props.totalSnore}
        snorePerSecond={props.snorePerSecond}
      />
      
      <h1 className="shop-header-title">Shop Items</h1>
      <p className="shop-description">
        Select the available item to upgrade and it will multiply so you will get more Zzz per click,
        can only be bought once. 
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