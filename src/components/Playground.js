import React, { Component } from 'react';
import Square from './Square';

class Playground extends Component {
  render() {
    //style
    const { width, boardSize } = this.props;
    const fontSizeMultiplier = 0.8;
    const squareSize = Math.floor(width / boardSize);
    const fontSize = Math.floor(squareSize * fontSizeMultiplier);
    
    const turns = this.props.squares.map((square, index) =>
      <Square
        style={{ width: squareSize, height: squareSize, fontSize }}
        value={square}
        handleSquareClick={this.props.updateSquares}
        key={index}
        index={index} />
    )

    return (
      <div style={{ width }} className='board'>
        {turns}
      </div>
    );
  }
}

export default Playground;