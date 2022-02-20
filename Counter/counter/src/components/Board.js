import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Board extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    };

  }

  render(){
    return (
      <div className="board-style">
        <button onClick={() => this.setState({ count: this.state.count -= 1})}>-</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count += 1})}>+</button>
      </div>
    );
  }
};

export default Board;