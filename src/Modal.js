import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const modal_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const overlay_styles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal({open, message, onPlayAgain, onNewGame, onQuit}) {

    const [buttons, setButtons] = useState()
    
    if (!open) { return null }    
    
    return ReactDOM.createPortal (
        <>
            <div style={overlay_styles} />
            <div style={modal_styles}>
                <h1>{message}</h1>
                <button onClick={onPlayAgain}>Play Again</button>
                <button onClick={onNewGame}>New Game</button>
                <button onClick={onQuit}>Quit</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}