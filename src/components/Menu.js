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
      gameIsStarted: false
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
    console.log(this.state)
  }
  handleEnd = () => {
    this.setState({
      gameIsStarted: false
    });
    console.log(this.state)
  }

  render() {
    const { gameIsStarted, playerX, playerO, boardSize } = this.state;

    return gameIsStarted ?
      <Board
        playerX={playerX}
        playerO={playerO}
        boardSize={boardSize}
        handleEnd={this.handleEnd}
      /> :
      <GameSettingsInput
        playerX={playerX}
        playerO={playerO}
        playerO={playerO}
        boardSize={boardSize}
        handleUpdate={this.handleUpdate}
        handleStartGame={this.handleStart} />
  }
}

export default Menu;