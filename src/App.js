/*Main file to edit the content / Huvudsakliga filen för att redigera innehållet*/


import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//! Our main component!  

class App extends Component {
  render() {
      //JSX syntax
      let result = 1 + 2;
      let className = "an-app";
      // Return what´s visable
    return (
      <div className={className}>
        <h1>{result}</h1>
        <h1>{1 + 2}</h1>
        </div>
    );
  }
}

export default App;
