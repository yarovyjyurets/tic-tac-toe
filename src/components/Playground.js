import React, { Component } from 'react';
import Square from './Square';

class Playground extends Component {
  render() {
    const turns = this.props.squares.map((square, index) =>
      <Square
        value={square}
        handleSquareClick={this.props.updateSquares}
        key={index}
        index={index} />
    )

    return (
      <div className='board'>
        {turns}
      </div>
    );
  }
}

export default Playground;