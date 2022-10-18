import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import data from '../data/data.js'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="courses">
      {data.map(experience => {
        return (
          <Card
          id={experience.id}
          title={experience.title}
          description={experience.description}
          price={experience.price}
          coverImg={experience.coverImg}
          imgAlt={experience.imgAlt}
          rating={experience.stats.rating}
          reviewCount={experience.stats.reviewCount}
          location={experience.location}
          />
        )
      }
      )}
      </section>
    </div>
  )

}

export default App
