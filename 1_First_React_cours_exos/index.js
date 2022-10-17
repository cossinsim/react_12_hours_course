/*

// STRUCTURE FICHIERS -> EXPORT + IMPORT DES COMPOSANTS
// 1 FICHIER PAR COMPOSANT 


// Fichier Footer.js -> composant Footer 
// MEME CHOSE POUR AUTRES COMPOSANTS 

import React from "react"

function Footer() {
    return (
        <footer>
                <p>Paragraphe</p>
        </footer>
    )
}

export default Footer;


// FICHIER INDEX.JS -> IMPORT DES COMPOSANTS SOUHAITES 

import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
export default Footer;

*/

/* 

// CONCEPT PARENT/CHILD COMPONENTS 3

import React from "react"
import ReactDOM from "react-dom"

//Challenge: 

// - Add an `ul` inside the Header's `nav` and create
//   the following `li`s: "Pricing", "About", & "Contact"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <div className="nav-right">
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*
// CONCEPT PARENT/CHILD COMPONENTS 2

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function MainContent () {
    return(
        <section className="exemple-section">
            <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ol>
        </section>
    )
}

function Footer() {
    return (
        <footer>
            <p>Paragraphe</p>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*

// CONCEPT PARENT/CHILD COMPONENTS 1

function Header() {
    return (
        <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
        </header>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
*/

/* 
import React from "react"
import ReactDOM from "react-dom"

function Page () {
    return (
        <ol>
            <li>reason 1</li>
            <li>reason 2</li>
            <li>reason 3</li>
        </ol>
    )
}

ReactDOM.render(
    <Page />,
    document.querySelector('#root'))
*/

/* 
import React from "react"
import ReactDOM from "react-dom/client"

const funFacts = (
    <div className="funFacts-parent-container">
        <img width="40px" src="./react-logo.png" alt="Logo React" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.createRoot(document.querySelector('#root')).render(funFacts)

*/

/* Version React 1.17 -> ANCIENNE SYNTAXE ReactDOM.render(..., ...)

import React from "react"
import ReactDOM from "react-dom"

const funFacts = (
    <div className="funFacts-parent-container">
        <img width="40px" src="./react-logo.png" alt="Logo React" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    funFacts,
    document.querySelector('#root'))

*/