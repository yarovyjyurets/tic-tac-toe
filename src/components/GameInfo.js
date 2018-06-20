import React, { Component } from 'react';

class GameInfo extends Component {
  render() {
    return (
      <h1>Next turn is: {this.props.nextPlayerTurn}</h1>
    );
  }
}

export default GameInfo;