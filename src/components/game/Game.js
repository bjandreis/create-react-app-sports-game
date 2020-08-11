import React, { Component } from 'react';
import Team from '../team/Team';
import ScoreBoard from '../scoreboard/ScoreBoard';
import scoreSound from '../../assets/audio/swish.mp3'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0
      },
      visitingTeamStats: {
        shots: 0,
        score: 0
      }
    }

    this.scoreSound = new Audio(scoreSound)
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`
    let score = this.state[teamStatsKey].score

    if (Math.random() > 0.5) {
      score += 1

      setTimeout(() => {
        this.scoreSound.play()
      }, 100)
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score
      }
    }))
  }

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0
      },
      visitingTeamStats: {
        shots: 0,
        score: 0
      }
    }))
  }

  render() {
    return (
      <div className="Game">
        <h1>Welcome to {this.props.venue}</h1>
        
        <ScoreBoard
          visitingTeamStats={this.state.visitingTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <div className="stats">
          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot('home')}
          />

          <div className="versus">
            <h1>VS</h1>
          </div>

          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shoot('visiting')}
          />

        </div>

        <div className="reset">
          <strong>Resets: </strong> {this.state.resetCount}
          <br />
          <button onClick={this.resetGame}>Reset Game</button>
        </div>

      </div>
    )
  }

}

export default Game;