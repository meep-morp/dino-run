import React from "react";
import { useState } from "react";
import { randomNumber } from "../functions";

import cactus from "../../assets/Obstacles/Cactus-0001-export.png"
import dustbunny from "../../assets/Obstacles/DustBunny-0001-export.png"
import skull from "../../assets/Obstacles/Skull-0001-export.png"

const Obstacle = props => {

    const arr = [cactus, dustbunny, skull];
    const [count, setCount] = useState(randomNumber(0, arr.length - 1)); 

    return (
        <img className="obstacle" src={arr[count]} alt=""/>
    )
}

export default Obstacle;