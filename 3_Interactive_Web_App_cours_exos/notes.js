/* STATE COMPLEXE -> PASSING STATE AS PROPS -> PARENT/CHILD COMPONENTS RENDERING

// FICHIER App.js

import React from "react"
import Count from "./Count"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
    <div className="counter">
    <button className="counter--minus" onClick={subtract}>–</button>

            <Count number={count} />

    <button className="counter--plus" onClick={add}>+</button>
</div>
)
}

*/

/* STATE COMPLEXE -> OBJET -> MODIFIER UNE PROPRIETE D'UN STATE OBJET

// OU LUI AJOUTER UNE PROPRIETE ETC 
// UTILISATION SPREAD OPERATOR POUR NE PAS AVOIR A CTRLC CTRLV
// TTES LES PROPS. DE L'OBJET 

const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

function toggleFavorite() {
    setContact(prevContact => (
			{
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }
		))
}

*/

/* STATE COMPLEXE -> OBJET 

// COMBINE AVEC TERNAIRE POUR AFFICHAGE CONDITIONNEL +
// DISPLAY UNE IMAGE / L'AUTRE SELON VALEUR D'UNE PROP DU STATE TYPE OBJET

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

*/

/* STATE COMPLEXE -> OBJET

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/star-empty.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

*/

/* STATE COMPLEXE -> ARRAY

import React from 'react';
import ReactDOM from 'react-dom'; 
import { useState } from "react";

function App() {
    
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

    function addItem() {
        // Build from scratch :)
        setThingsArray(prev => [...prev, `Thing ${prev.length + 1}`]);
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

*/

/* TERNAIRE -> AUTRE APPLICATION -> "TOGGLE" UN STATE

import React from "react"
import { useState } from "react"

export default function App() {
    
    const [goingOut, setGoingOut] = useState(true);

    function changeMind () {
        setGoingOut(prev => !prev)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{goingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    ) 
}

*/

/* TERNAIRE -> APPLICATION REACT -> PAR EX, RENDU CONDITIONNEL !

import React from "react"

export default function App() {
    const isGoingOut = false
    
     // Syntaxe condition "classique" 
     // if (isGoingOut) { return "Yes" } else { return "No" };

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

*/

/* TERNAIRES -> JS VANILLA ASSIGNATION VALEUR VARIABLE

// TERNAIRES PEUVENT ETRE UTILISES POUR ASSIGNER DIRECTEMENT UNE VALEUR
// DANS UNE VARIABLE, EN FONCTION D'UNE CONDITION

let answer = isGoingOut ? "Yes" : "No"

*/

/* TERNAIRES -> SYNTAXE JS VANILLA 

// JS VANILLA (doc)
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
// if isMember est vérifié (= vaut true)  -> return "2$" : else -> return "10$"
}

console.log(getFee(true));
// expected output: "$2.00"

*/

/* SETTER -> 2 PARAMETRES ACCEPTES 

// TOUS TYPES VALEURS JS ACCEPTES
setExemple(10);
setExemple([..]);
setExemple({x: 1, y: 2})

// OU

// CALLBACK FUNCTION

setExemple(prev => prev * 2);

*/

/* STATE -> SI VALEUR PRECEDENTE DOIT ETRE UTILISEE, PASSER FONCTION CALLBACK EN PARAM DU SETTER 

// SYNTAXE UTILISATION VALEUR PRECEDENTE DU STATE

setNomDuState( prevState => prevState +1 );

// EXEMPLE

setCount( prevCount => prevCount + 1);

*/

/* STATE 

import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    
		// on passer par le setter dédié du state isImportant
		// pour modifier sa valeur
		// on ne la redéfinit pas directement !
    function handleClick() {
        setIsImportant("No");
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1 onClick={handleClick} >{isImportant}</h1>
            </div>
        </div>
    )
}
*/

/* STATE -> SYNTAXE + SETTER

const [nomDuState, setNomDuState] = useState("Yes")

function exemple { 
    return ( <p>{nomDuState]</p> ) 
}

*/

/* EXEMPLE "EQUIVALENT" STATE EN JS VANILLA

function greeting(name) {
		
		// LORSQUE NOTRE FONCTION EST APPELEE, ON DEFINIT 3 EQUIVALENTS DE STATE
		// = ON INITIALISE DES VARIABLES AVEC UNE CERTAINE VALEUR

    const date = new Date()
    const hours = date.getHours()
    
		// ICI, LA VALEUR INITIALE DE NOTRE "STATE" -> timeOfDay EST ""
    let timeOfDay = "";

		// ENSUITE, SELON DES CONDITIONS, ON VA CHANGER LA VALEUR
		// DE NOTRE STATE timeDay A "morning" / "afternoon" / etc
		// TOUT EN EXPLOITANT LES VALEURS D'UN AUTRE "STATE" -> hours,
		// DONT ON SE SERT AU SEIN DE NOS CONDITIONS

    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
		// ENFIN, ON RETOURNE QQUE CHOSE COMPOSE DE NOTRE STATE MIS A JOUR
		// ET DE LA "PROP" name PASSEE EN PARAMETRE D'ENTREE DE NOTRE FONCTION
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))

*/

/* PROPS -> DEF + EXEMPLE JS VANILLA 

// ICI, ON OPERE A PARTIR DES VALEURS PASSEES EN PARAMETRE DE NOTRE FONCTION
// MAIS ON NE REDEFINIT PAS LES VALEURS DE CES PARAMETRES 
// MEME CHOSE POUR LES PROPS !

function addTwoSquaredNumbers(a, b) {
    return a * a + b * b 
}

console.log(addTwoSquaredNumbers(1, 2))

*/

/* EVENT LISTENERS

<button onClick={handleClick}>Click me</button>

import React from "react"

export default function App() {
    function handleClick() {
        console.log("button clicked!")
    }
    
    function handleOnMouseOver() {
        console.log("Mouse over image!")
    }
    
    return (
        <div className="container">
            <img 
                src="https://picsum.photos/640/360" 
                onMouseOver={handleOnMouseOver} 
            />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

*/