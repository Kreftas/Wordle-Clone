import React from 'react'
import './secret-style.css'
import { Link } from "react-router-dom";

const Secret = () => {
    return (
        <div class="secret-container">
            <div class="secret-items">
                <h2>Secret code</h2>
                <h3>479</h3>
            </div>
            <div className="whitespace">
                
            </div>
            <div className="nav">
                <Link to="/">Try again</Link>
            </div>
        </div>
    )
}

export default Secret