//import React from 'react';
import React, { Component } from 'react';
//import UserName from './Components/UserName';
/* Will contain information from: UpgradeContainer, UserStatsContainer */

/* login */

/*class MainContainer extends Component {
  
    
  constructor(props) {
    super(props);

    
  }
  */  




function MasterContainer(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default MasterContainer;