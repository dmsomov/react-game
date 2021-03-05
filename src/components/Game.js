import React, { Component } from 'react'
import Board from './modules/Board'
import calculateWinner from './modules/calculateWinner'
import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    localStorage.setItem('hystory', JSON.stringify(history))
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ===0,
    })
  }

  clickButton(i) {
    i.preventDefault();
    this.jumpTo(0);
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    })
  }

  render() {
    const history = this.state.history;
    // const current = history[history.length - 1 || this.state.stepNumber];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Перейти к ходу #' + move : 'К началу игры';
      return (
        <li key={move}>
          <button className="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <>
        <button className="button" onClick={(i) => this.clickButton(i)} >New Game</button>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div className="player" >{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </>
    );
  }
}

export default Game;