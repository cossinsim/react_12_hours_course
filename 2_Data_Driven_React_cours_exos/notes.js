/*
// PROPS 4 -> EXO GESTION AVEC / SANS PROPS 

// FICHIER APP.JS

import React from "react"
import Joke from "./Joke.js"

function App() {
    return (
        <div className="jokes">  
            <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."/>
            <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
            <Joke punchline="xyz"/>
            <Joke />
        </div>
    )
}

export default App;

// FICHIER INDEX.JS

import React from "react"
import ReactDOM from "react-dom"

import App from "./App.js"

ReactDOM.render(
    <App />
    , document.getElementById("#root")
)

// FICHIER JOKE.JS

import React from "react"

function Joke (props) {
    
    if ("setup" in props && props.hasOwnProperty("punchline")) {
        return (
            <div class="joke"> 
                <p>{props.setup}</p>
                <p>{props.punchline}</p>
            </div>
        )
    }
    else if (!props.hasOwnProperty("setup") && props.hasOwnProperty("punchline"))
    {
        return (
            <div class="joke"> 
                <p>{props.punchline}</p>
            </div>
        )
    } else {
        return (
            <div>I need at least a punchline !</div>
        )
    }
}

export default Joke;

*/

/*
// PROPS 3 -> DESTRUCTURING EST POSSIBLE 

// FICHIER APP.JSX

function App() {
    return (
        <div className="contacts">
					<Contact img="..." name="x" phone="y" email="z" />
				</div>
		)
}

// FICHIER CONTACT.JSX

import React from "react"

export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}
*/



/*
// PROPS 2 -> CREATION D'UN COMPOSANT ACCEPTANT props EN ENTREE

// FICHIER Contact.jsx

import React from "react"

export default function Contact(props) {

    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// FICHIER App.jsx

import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
        </div>
    )
}

export default App

// GENERE UNE INSTANCE DE CONTACT AVEC LE CONTENU LIE AUX props PASSEES
*/


/* 
// PROPS 1 -> PROPRIETES ATTRIBUEES AU COMPOSANT LORS DE SON RENDU

// FICHIER App.jsx

import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App

// Fichier Contact.jsx

import React from "react"

export default function Contact(props) {
    console.log(props)
    return (
			 // ...
    )
}

/* CONSOLE.LOG AFFICHERA AUTANT D'OBJETS QU'IL Y A EU DE RENDUS DE NOTRE COMPOSANT
EXEMPLE AVEC 4 "CHATS" DIFFERENTS :

{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}
{
    img: "./images/fluffykins.png", 
    name: "Fluffykins", 
    phone: "(212) 555-2345", 
    email: "fluff@me.com"
}
{
    img: "./images/felix.png", 
    name: "Felix", 
    phone: "(212) 555-4567", 
    email: "thecat@hotmail.com"}
{
    img: "./images/pumpkin.png", 
    name: "Pumpkin", 
    phone: "(0800) CAT KING", 
    email: "pumpkin@scrimba.com"
}

*/