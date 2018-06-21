import React, { Component } from 'react';

class GameInfo extends Component {
  render() {
    const { nextTurnPlayerName, nextTurnSymbol } = this.props;

    return (
      <h1>{nextTurnPlayerName}`s turn. ("{nextTurnSymbol}")</h1>
    );
  }
}

export default GameInfo;