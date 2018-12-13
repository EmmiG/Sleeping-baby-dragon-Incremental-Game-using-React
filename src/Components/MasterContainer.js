import React from 'react';

/* login */

function MasterContainer(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default MasterContainer;