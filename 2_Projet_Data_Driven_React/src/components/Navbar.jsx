import { useState } from 'react'
import logo from "../assets/Navbar/airbnb-logo.png"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo Airbnb"></img>
        </nav>
    )
}

export default Navbar;