import React from 'react';

/* Will contain information from: UpgradeContainer, UserStatsContainer */

/* login */

function MasterContainer(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default MasterContainer;