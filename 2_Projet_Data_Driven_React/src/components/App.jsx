import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Signature from './Signature.jsx'
import data from '../data/data.js'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="courses">
      {data.map(exp => {
        return ( 
          // CHAQUE ITEM DOIT AVOIR UNE CLE key UNIQUE ! ICI-> ID UTILISE
          // REFACTOR -> ON PASSE MAINTENANT UN OBJET COMME PROPS
          // props.item (=exp) -> dispose de ttes propriétés définies dans data
          // On y accède dans notre composant <Card />

          <Card
          key={exp.id}
          item={exp}
          />
        )
      }
      )}
      </section>
      <Signature />
    </div>
  )

}

export default App
