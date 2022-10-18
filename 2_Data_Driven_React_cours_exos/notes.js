/* 
// PROPS 8 -> EXPLOITER DATA STOCKEE DANS UN FICHIER EXTERNE AVEC map()
// TABLEAU D'OBJETS (format JS ou JSON) -> FICHIER EXTERNE
// map(); ET CREER ELEMENTS JSX AVEC PROPS POUR CHAQUE OBJET DS TABLEAU data

// Fichier Joke.js

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData" // importer data depuis fichier externe

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

// FICHIER App.js

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData" // importer data depuis fichier externe

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke exempleProp={joke.setup} autreProp={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

/* 

// PROPS 7 -> MAP UN ARRAY "CLASSIQUE" ET CREER DES ELEMENTS JSX, AVEC map();

// POUR CHAQUE ELEM, RETURN UN h3

export default function App() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div>
            {colors.map(color => 
            <h3>{color}</h3>
            )}
        </div>
    )
}

*/

/* 

// PROPS 6 -> EXOS .map()

//Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]

let numsSquared = nums.map(num => num * num);

// Given an array of strings, return an array where 
// the first letter of each string is capitalized

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

let namesCapitalized = names.map(name => name.charAt(0).toUpperCase + name.slice(1)

// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.
// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

let pokemonsP = pokemon.map(poke => <p>poke</p>)

// CORRECTION -> RAPPEL ! SYNTAXE BACKTICKS CLASSIQUE JS !!!

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

*/

/* 

// PROPS 5 -> TOUS TYPES JS ACCEPTES, SYNTAXE CURLY BRACKETS { } A RESPECTER

// Ici, on va passer une string, un booléen, des number, et un tableau
// d'objets (ici, un seul objet pour taille code) comme props

export default function App() {
    return (
        <div>
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[
									{author: "", body: "", title: ""}
								]}
            />
				</div>
		)
}

*/

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