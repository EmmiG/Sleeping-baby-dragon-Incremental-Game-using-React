import React, { Component } from 'react';

//import TotalSnoreContainer from './TotalSnoreContainer.js';



class HiddenandShow extends Component {
 
  constructor(props) {
    super(props);
    //this.handleDragonClick = this.handleDragonClick.bind(this);
 
      this.state = {
    show:true,
    
    };
  }
    
    
    
    ToggleClick = () => {
    this.setState({ show: !this.state.show});
}
    
render() {

   
     
      // Return what´s visable
    return (
      
    
    <button onClick={this.ToggleClick}>
        
        {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        
            ); // return
        
           { this.state.show ? <p> { this.state.className="total-snore-counter" }</p> : ''}
        
     
    
        

       
        
         
        } //render
        
        
        } // class
         
    export default HiddenandShow;
