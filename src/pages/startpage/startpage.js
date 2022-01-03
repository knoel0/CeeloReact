import React from 'react';
import { useHistory } from 'react-router-dom';
import './StartPage.css';

export default function StartPage() {

    let history = useHistory();

    return (
        <div className="startpage-container">
            <div className="startpage-title-container">
                <h1>CEE-LO</h1>
            </div>
            <button
                onClick = {() =>
                    history.push({
                        pathname: '/Setup'
                    })
                }
                >START
            </button>
        </div>
    );
}