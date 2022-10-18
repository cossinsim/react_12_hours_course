import { useState } from 'react'
import Navbar from "./Navbar.jsx"
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )

}

export default App
