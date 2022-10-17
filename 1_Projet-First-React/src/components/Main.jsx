import React from "react"
import background from "../assets/Main-background/reactjs-icon-2.png"
import "./Main.css"

export default function Main () {
    return (
        <section className="main-content">
            <h2 className="main-title">Fun facts about React</h2>
            <ul className="main-list"> 
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}