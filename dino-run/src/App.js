import React from 'react';
import Trex from './game/components/Trex';
import "./styles/gameEngine.css"
import { useState } from 'react';
import Obstacle from './game/components/Obstacle';
import { randomNumber, isColliding } from './game/functions';
import { useEffect } from 'react';

function App() {

  const [isAlive, setIsAlive] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      <Trex />
      <Obstacle />
    </div>
  );
}

export default App;
