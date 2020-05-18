import React from 'react';
import '../App.css';
import detectWinner from './DetectWinner'
import Square from './Elements'

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function TicTacToe() {
  const [state, setState] = React.useState({
    player: CROSS,
    positions: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ]
  })

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions
    })
  }

  function reset() {
    setState({
      player: CROSS,
      positions: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY
      ]
    })
  }

  const winner = detectWinner(state.positions);

  return (
    <div>
      <div className="grid">
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
}

function Result({ winner, reset }){
  return (
    <div className="result">
      {winner === CIRCLE && 'Circle won the game'}
      {winner === CROSS && 'Cross won the game'}
      {winner === 'TIE' && 'It is a tie!'}
      <button onClick={reset}>Play again!</button>
    </div>
  )
}

export default TicTacToe;