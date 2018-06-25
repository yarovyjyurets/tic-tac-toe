import React, { Component } from 'react';

class GameSettingsInput extends Component {

  handleInputChange = (player, event) => {
    this.props.handleUpdate(player, event.target.value)
  }

  render() {
    const { playerX, playerO } = this.props;

    return (
      <div>
        <h2>Welcome, please input players names:</h2>
        <label>Player name for "X":</label>
        <input
          type="text"
          onChange={this.handleInputChange.bind(null, 'playerX')}
          defaultValue={playerX} />
        <br />
        <label>Player name for "O":</label>
        <input
          type="text"
          onChange={this.handleInputChange.bind(null, 'playerO')}
          defaultValue={playerO} />
        <br />
        <label>Board size NxN:</label>
        <input
          type="number"
          onChange={this.handleInputChange.bind(null, 'boardSize')}
          defaultValue={this.props.boardSize} />
        <br />
        <label>Win row length size:</label>
        <input
          type="number"
          onChange={this.handleInputChange.bind(null, 'winRowLength')}
          defaultValue={this.props.winRowLength} />
        <br />
        <button onClick={this.props.handleStartGame}>GO go go play</button>
      </div>
    );
  }
}

export default GameSettingsInput;
