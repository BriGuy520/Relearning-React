import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {

//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   }
//   // }

//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {

  // This component creates the board. Define instance of 
  // class using constructor and then use super to access 
  // functions of the parent object.

  // props is an "instance" attribute

  // constructor(props){
  //   super(props);
  //   // this.state is an "attribute" which defines the
  //   // boards layout
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }

  // render the chosen square with the value of the current player
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}  
      />
    );
  }

  // After all of that render the board with the new state.
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  // This component renders the board for the game when we
  // start the game.

  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  handleClick(i){
    // creates a copy of the squares array in order to 
    // preserve the original state of the board so 
    // we can compare the state of the current board to 
    // this one. 
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // we have winner or square already chosen simply return
    // i.e. do nothing.
    if(calculateWinner(squares) || squares[i]){
      return;
    }

    // produce an 'X' or 'O' depending on the state of xIsNext
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // set the state of the squares and xIsNext attributes
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  render() {

    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;

    if(winner){
      status = 'Winner: ' + winner; 
    } else {
      status = "Next player: " + (this.state.isXNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares){

  // Winning combinations
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

  // Go through each winning combination
  for(let i = 0; i < lines.length; i++){
    // assign each value of a square to a variable. Example,
    // i = 0, a = 0, b = 1, c = 2
    const [a, b, c] = lines[i];

    // 
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);