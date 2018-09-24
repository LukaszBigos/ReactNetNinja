import React, { Component } from 'react';
import Bikes from './Bikes';
import AddBike from './AddBike';

class App extends Component {
  state = {
    bikes : [
      { brand: 'Kross', model: 'Moon', type: 'enduro', id: 1 },
      { brand: 'Giant', model: 'Trance', type: 'trail', id: 2 },
      { brand: 'Canyon', model: 'Spectral', type: 'trail', id: 3 },
    ]
  }

  render() {
    return (
      <div className="App">
        <AddBike />
        <h1>List of nice bikes</h1>
        <Bikes bikes={this.state.bikes}/>
      </div>
    );
  }
}

export default App;
