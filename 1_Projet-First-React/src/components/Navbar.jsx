import React from "react"
import logo from "../assets/Navbar-logo/reactjs-icon.png"
import "./Navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img className="nav-logo" src={logo} alt="Logo React"/>
                <h1 className="nav-title">ReactFacts</h1>
            </div>
            <div className="nav-right">
                <h4 className="nav-subtitle">React Course - Project 1</h4>
            </div>
        </nav>
    )
}