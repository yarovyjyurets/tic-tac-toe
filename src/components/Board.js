import React, { Component } from 'react';
import Playground from './Playground';
import GameInfo from './GameInfo';

const BOARD_SIZE = 3;
const WIDTH = 800;

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [],
      nextTurnIsX: true
    }
  }

  componentWillMount() {
    this.setState((state, props) => {
      return {
        squares: Array(props.boardSize ** 2).fill(null)
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
    this.setState((state, props) => {
      return {
        squares: Array(props.boardSize ** 2).fill(null)
      }
    });
  }
  render() {
    const { squares, nextTurnIsX } = this.state;
    const { boardSize, playerX, playerO } = this.props;

    let nextTurnPlayerName;
    let nextTurnSymbol;
    if (nextTurnIsX) {
      nextTurnPlayerName = playerX
      nextTurnSymbol = 'X'
    } else {
      nextTurnPlayerName = playerO
      nextTurnSymbol = 'O'
    }

    return false ?
      <div>
        <h2>WINNER is :</h2>
        <button onClick={this.satrtnewGame}>Start new game!!!</button>
      </div> :
      <div>
        <button onClick={this.props.handleEnd}>RESTART GAME</button>
        <GameInfo nextTurnPlayerName={nextTurnPlayerName} nextTurnSymbol={nextTurnSymbol} />
        <Playground
          width={WIDTH}
          boardSize={boardSize}
          squares={squares}
          updateSquares={this.handleSquareClick} />
      </div>

  }
}

export default Board;