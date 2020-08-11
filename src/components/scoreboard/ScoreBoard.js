import React, { Component } from 'react';

function ScoreBoard(props) {
    return (
        <div className="ScoreBoard">
            <h2>SCOREBOARD</h2>

            <div className="teamStats">
                <h3>HOME: {props.homeTeamStats.score}</h3>
            </div>

            <div className="teamStats">
                <h3>VISITORS: {props.visitingTeamStats.score}</h3>
            </div>
        </div>
    )
}

export default ScoreBoard;