import { useState } from 'react'
import background from '../assets/Cover/cover.png'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <img className="cover-image" src={background} alt="cover image"></img>
            <article className="intro">
                <h1 className="intro-title">Online Experiences</h1>
                <p className="intro-paragraph">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </article>
        </section>
    )
}

export default Hero;

