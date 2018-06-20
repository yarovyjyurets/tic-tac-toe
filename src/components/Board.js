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

  calculateWinner = () => {
    const { squares } = this.state;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  satrtnewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      nextTurnIsX: true
    });
  }
  render() {
    const { squares, nextTurnIsX } = this.state;

    const winner = this.calculateWinner();
    console.log('>>>>>', winner)
    return winner ?
      <div>
        <h2>WINNER is : "{winner}"</h2>
        <button onClick={this.satrtnewGame}>Start new game!!!</button>
      </div> :
      <div>
        <GameInfo nextPlayerTurn={nextTurnIsX ? 'X' : 'O'} />
        <Playground squares={squares} updateSquares={this.handleSquareClick} />
      </div>

  }
}

export default Board;