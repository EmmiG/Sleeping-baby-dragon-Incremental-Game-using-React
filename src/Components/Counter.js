import React from 'react';

class Counter extends React.Component{
    state = {
        counter: 0
    }

incrementCounter = () => {
    this.setState(
    {
        counter: this.state.counter + 1
    }
    
    )
}

render() {
    return (
        
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>
          Click me
        </button>
      </div>
        
    )
  }

}

export default Counter;