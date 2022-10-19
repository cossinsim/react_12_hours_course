import React from "react"
import trollface from "../assets/images/troll-face.png"
import "./Navbar.css"

export default function Navbar () {
    return (
        <header className="header">
            <div className="header-left">
                <img className="header-logo" src={trollface} alt="Trollface"/>
                <h1 className="header-title">Meme Generator</h1>
            </div>
            <div className="header-right">
                <h4 className="header-subtitle">React Course - Project 3</h4>
            </div>
        </header>
    )
}