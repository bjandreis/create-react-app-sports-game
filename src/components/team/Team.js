import React, { Component } from 'react';
import scoreSound from '../../assets/audio/swish.mp3'

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            default: true,
            name: props.name,
            logo: props.logo,
            shots: 0,
            score: 0
        }

        this.scoreSound = new Audio(scoreSound)
    }

    takeShot = (event) => {
        this.setState((state, props) => {
            const scoreChance = Math.random()
            this.state.default = false
            if (scoreChance < 0.5) {
                this.scoreSound.play()
                return {
                    shots: state.shots + 1,
                    score: state.score + 1
                }
            } else {
                return { shots: state.shots + 1 }
            }
        })
    }

    render() {
        const teamName = this.state.name
        const teamLogo = this.state.logo
        const shotsTaken = this.state.shots
        const totalScore = this.state.score
        const shotPercentage = Math.round(this.state.score / this.state.shots * 100)
        const initialState = this.state.default
        let percentageHTML
        if (initialState === true) {
            percentageHTML = ''
        } else {
            percentageHTML = <h3>Score percentage: {shotPercentage}%</h3>
        }
        return (
            <div>
                <h1>{teamName}</h1>
                <img src={teamLogo} width='200px' />
                <h3>Shots taken: {shotsTaken}</h3>
                <h3>Total score: {totalScore}</h3>
                {percentageHTML}
                <button onClick={this.takeShot}>Shoot</button>
            </div>
        )
    }
}

export default Team;