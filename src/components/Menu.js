import React, { Component } from 'react';
import Board from './Board'
import GameSettingsInput from './GameSettingsInput'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerX: '',
      playerO: '',
      boardSize: 3,
      gameIsStarted: false,
      winRowLength: 3
    }
  }

  handleUpdate = (property, name) => {
    this.setState((state) => {
      return {
        ...state,
        [property]: name
      }
    });
  }

  handleStart = () => {
    this.setState({
      gameIsStarted: true
    });
  }
  handleEnd = () => {
    this.setState({
      gameIsStarted: false
    });
  }

  render() {
    const { gameIsStarted, playerX, playerO, boardSize, winRowLength } = this.state;

    return gameIsStarted ?
      <Board
        playerX={playerX}
        playerO={playerO}
        boardSize={boardSize}
        winRowLength={winRowLength}
        handleEnd={this.handleEnd}
      /> :
      <GameSettingsInput
        playerX={playerX}
        playerO={playerO}
        boardSize={boardSize}
        winRowLength={winRowLength}
        handleUpdate={this.handleUpdate}
        handleStartGame={this.handleStart} />
  }
}

export default Menu;