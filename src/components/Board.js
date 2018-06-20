import React, { Component } from 'react';
import Playground from './Playground';
import GameInfo from './GameInfo';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextTurnIsX: true
    }
  }

  handleSquareClick = (i) => {
    const { nextTurnIsX, squares } = this.state;

    const newSquares = [...squares];
    if (!newSquares[i]) {
      newSquares[i] = nextTurnIsX ? 'X' : 'O';
      this.setState({
        squares: newSquares,
        nextTurnIsX: !nextTurnIsX
      });
    }
  }

  render() {
    const { squares, nextTurnIsX } = this.state;

    return (
      <div>
        <GameInfo nextPlayerTurn={nextTurnIsX ? 'X' : 'O'} />
        <Playground squares={squares} updateSquares={this.handleSquareClick}/>
      </div>
    );
  }
}

export default Board;