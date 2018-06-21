import React, { Component } from 'react';

class Square extends Component {

  handleClick = () => {
    const { index, handleSquareClick } = this.props;
    handleSquareClick(index);
  }

  render() {
    return (
      <button
        style={this.props.style}
        className='square'
        onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;