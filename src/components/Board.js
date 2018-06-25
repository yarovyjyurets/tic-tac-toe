import React, { Component } from 'react';
import Playground from './Playground';
import GameInfo from './GameInfo';
import _ from 'lodash';

const WIDTH = 800;

const checkWinRow = (matrix, winLength, character) =>
  matrix.some(r => r.join('').includes(character.repeat(winLength)));

const buildDiagonalPositions = (matrix, size, bottomToTop) => {
  const resultMatrix = [];
  for (let k = 0; k <= 2 * (size - 1); ++k) {
    const row = [];
    for (let y = size - 1; y >= 0; --y) {
      const x = k - (bottomToTop ? size - 1 - y : y);
      if (x >= 0 && x < size) {
        row.push(matrix[y][x]);
      }
    }
    if (row.length > 0) {
      resultMatrix.push(row)
    }
  }
  return resultMatrix;
}
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
    const { squares, nextTurnIsX } = this.state;
    const { boardSize, winRowLength } = this.props;
    const character = !nextTurnIsX ? 'X' : 'O';

    const matrix = _.chunk(squares, boardSize);
    const verticalMatrix = _.zip.apply(_, matrix);
    const diagonalMatrix = buildDiagonalPositions(matrix, boardSize);
    const invertDiagonalMatrix = buildDiagonalPositions(matrix, boardSize, true);

    const horizontalVerdict = checkWinRow(matrix, winRowLength, character);
    if (horizontalVerdict) {
      return character;
    }
    const verticalVerdict = checkWinRow(verticalMatrix, winRowLength, character);
    if (verticalVerdict) {
      return character;
    }
    const diagonalVerdict = checkWinRow(diagonalMatrix, winRowLength, character);
    if (diagonalVerdict) {
      return character;
    }
    const invertDiagonalVerdict = checkWinRow(invertDiagonalMatrix, winRowLength, character);
    if (invertDiagonalVerdict) {
      return character;
    }

    return null;
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

    const winner = this.calculateWinner();

    return winner ?
      <div>
        <h2>WINNER is {winner}:</h2>
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