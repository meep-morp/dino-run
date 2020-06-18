import React from 'react';
import Trex from './game/components/Trex';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/gameEngine.css"
import { useState } from 'react';
import Obstacle from './game/components/Obstacle';
import { randomNumber, isColliding } from './game/functions';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const player = useRef(null)
  const entity = useRef(null)

  const [isAlive, setIsAlive] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("count")
    window.setInterval(() => {
      setScore(score => score + 10);
    }, 300)
  }, []);

  // useEffect(() => {
  //   console.log(player)
  //   console.log(entity)
  // }, [tick])

  // useEffect(() => {
  //   isColliding(player, entity) ? setIsAlive(false) : setIsAlive(true);
  // }, [score])

  // setInterval(() => {
  //   setTick(tick + 1)
  // }, 1000)

  return (
    <Router>
      <Route path="/" exact>
        <div className="home">
          <h1>DINO RUN</h1>
          <button 
          onClick={() => {
            window.location.assign("/start");
            setScore(0);
          }} 
          className="button" 
          >Start Game</button>
        </div>
      </Route>
      <Route path="/start">
        <div className="game">
          <div className="score">{score}</div>
          <Trex ref={player} />
          <Obstacle ref={entity} />
        </div>
      </Route>
    </Router>
  );
}

export default App;
