import React, { useState, useEffect } from 'react'
import Roll from '../roll/Roll';
import './Player.css';

export default function Player({ id, name, score, winner, active, inCurrentGame, clickHandler, rerender }) {

    const [STYLE, setSTYLE] = useState({
        border: '1px solid #000'
    })

    const [diceRoll, setDiceRoll] = useState([]);

    const scoreNames = {
        13: "456",
        12: "Trip 6",
        11: "Trip 5",
        10: "Trip 4",
        9: "Trip 3",
        8: "Trip 2",
        7: "Trip 1",
        6: "High 6",
        5: "High 5",
        4: "High 4",
        3: "High 3",
        2: "High 2",
        1: "High 1",
        [-1]: "123" 
    }

    function rollDice() {
        let diceTemp = [];
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        diceTemp.push(Math.floor(Math.random() * 6) + 1);
        setDiceRoll(diceTemp);
    }

    useEffect(() => {
        if (rerender || !rerender) {
            setDiceRoll([]);
            setSTYLE({
                ...STYLE,
                border: '1px solid #000'
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rerender])

    useEffect(() => {
        clickHandler(id, diceRoll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diceRoll])

    useEffect(() => {
        if (!inCurrentGame) {
            setSTYLE({
                ...STYLE,
                border: '2px solid red'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inCurrentGame])

    useEffect(() => {
        if (inCurrentGame && winner) {
            setSTYLE({
                ...STYLE,
                border: '2px solid #00FF00'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winner])
    
    return (
        <div className="player-container" style={STYLE}>
            <h1>{name}</h1>
            <h3>{scoreNames[score]}</h3>
            <Roll roll={diceRoll} />
            <button
                onClick={rollDice}
                disabled={!active}
                >Roll
            </button>
        </div>
    )
}