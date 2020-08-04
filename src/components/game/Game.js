import React, { Component } from 'react';
import Team from '../team/Team';
import redLogo from '../../assets/images/Team_red.png';
import bluLogo from '../../assets/images/Team_blu.png';

function App() {
  return (
    <div className="App">
      <Team />
      <Game venue="2Fort" />
    </div>
  );
}

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            venue: props.venue
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.state.venue}</h1>
                <Team name='Reliable Excavation Demolition (RED)' logo={redLogo} />
                <Team name='Builders League United (BLU)' logo={bluLogo} />
            </div>
        )
    }
}

export default Game;