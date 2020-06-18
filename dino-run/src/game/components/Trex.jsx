import React from "react";
import trex from "../../assets/Trex/Trex-0001.gif"
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


let Trex = props => {
    const body = document.querySelector("body");

    const spacebar = 32;
    const upArrow = 38;
    const w = 87;

    const [jump, setJump] = useState(false)

    body.addEventListener("keypress", (e) => {

        if (e.keyCode === spacebar || e.keyCode === upArrow || e.keyCode === w) {
            setJump(true)

            setTimeout(() => {
                setJump(false)
            }, 550)
        }

    })
  



    return (
            <img className={jump ? "trex jump" : "trex"} src={trex} />
    )
}

export default Trex;