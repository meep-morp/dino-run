import React from 'react';
import Trex from './game/components/Trex';
import "./styles/gameEngine.css"
import { useState } from 'react';
import Obstacle from './game/components/Obstacle';
import { randomNumber, isColliding } from './game/functions';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const player = useRef(null)
  const entity = useRef(null)

  const [count, setCount] = useState(1);
  const [tick, setTick] = useState(0);
  const [isAlive, setIsAlive] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
          setScore(score => score + 10)
    }, 300)
  }, [isAlive]);

  // useEffect(() => {
  //   console.log(player)
  //   console.log(entity)
  // }, [tick])

  // useEffect(() => {
  //   isColliding(player, entity) ? setIsAlive(false) : setIsAlive(true);
  // }, [])

  // setInterval(() => {
  //   setTick(tick + 1)
  // }, 1000)

  return (
    <div className="game">
      <div className="score">{score}</div>
      <Trex pos={tick} ref={player} />
      <Obstacle pos={tick} ref={entity} />
    </div>
  );
}

export default App;
