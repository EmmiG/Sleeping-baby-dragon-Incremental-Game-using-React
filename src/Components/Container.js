import React from 'react';

/* login */

function Container(props){
  return(
    <section className="container-fluid">
      { props.children }
    </section>
  )
}

export default Container;