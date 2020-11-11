import React from 'react';
import ReactDOM from 'react-dom';

const OVERLAY_STYLE = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}
const MAIN_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

export default function Modal({open, message, onClose, onPlayAgain, onNewGame, onQuit}) {
    
    if (!open) { return null }    
    
    return ReactDOM.createPortal (
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MAIN_STYLE}>
                <h1>{message}</h1>
                <button onClick={onClose}>Close</button>
                <button onClick={onPlayAgain}>Play Again</button>
                <button onClick={onNewGame}>New Game</button>
                <button onClick={onQuit}>Quit</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}