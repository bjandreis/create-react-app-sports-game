import React from 'react';
import './App.css';
import Game from './components/game/Game';
import homeTeamLogo from './assets/images/Team_red.png';
import visitingTeamLogo from './assets/images/Team_blu.png';

function App() {
  const redTeam = {
    name: 'Reliable Excavation Demolition',
    logoSrc: homeTeamLogo
  }

  const bluTeam = {
    name: 'Builders League United',
    logoSrc: visitingTeamLogo
  }
  
  return (
    <div className="App">
      <Game 
        venue="2Fort"
        homeTeam={redTeam}
        visitingTeam={bluTeam}
      />
    </div>
  );
}

export default App;
