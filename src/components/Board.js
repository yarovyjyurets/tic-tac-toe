import React, { Component } from 'react';
import Playground from './Playground';
import GameInfo from './GameInfo';

const BOARD_SIZE = 10;
const WIDTH = 800;

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: BOARD_SIZE,
      squares: [],
      nextTurnIsX: true
    }
  }

  componentWillMount() {
    this.setState((state) => {
      return {
        squares: Array(state.boardSize ** 2).fill(null)
      }
    });

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
    // wip...
  }

  satrtnewGame = () => {
    this.setState((state) => {
      return {
        squares: Array(state.boardSize ** 2).fill(null)
      }
    });
  }
  render() {
    const { squares, nextTurnIsX, boardSize } = this.state;

    return false ?
      <div>
        <h2>WINNER is :</h2>
        <button onClick={this.satrtnewGame}>Start new game!!!</button>
      </div> :
      <div>
        <GameInfo nextPlayerTurn={nextTurnIsX ? 'X' : 'O'} />
        <Playground
          width={WIDTH}
          boardSize={boardSize}
          squares={squares}
          updateSquares={this.handleSquareClick} />
      </div>

  }
}

export default Board;