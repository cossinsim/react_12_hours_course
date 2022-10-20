import React from "react"
import {useState} from "react"
import "./Meme.css"
import memedata from "../data/memedata.js"

function Meme () {

    const [allMemeImages, setAllMemeImages] = useState(memedata);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    function getMeme () {
        const memes = allMemeImages.data.memes;
        const rdm = Math.floor(Math.random() * memes.length);

        setMeme(prev => ({
            ...prev,
            randomImage: memes[rdm].url,
        }))   
    }

    function handleChange (event) {
        const {name, value} = event.target;
        setMeme(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <section className="memeGenerator">
            
            <form onSubmit={(e) => {e.preventDefault();}}className="meme-form" action="">
                <div className="text-inputs">

                    <label htmlFor="topTextInput" hidden>Top text</label>
                    <input 
                    type="text" 
                    name="topText" 
                    placeholder="Top text" 
                    className="form-input"
                    value={meme.topText}
                    onChange={handleChange}
                    />

                    <label htmlFor="bottomTextInput" hidden>Bottom text</label>
                    <input 
                    type="text" 
                    name="bottomText"
                    placeholder="Bottom text"  
                    className="form-input"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />

                </div>
                <button onClick={getMeme} className="get-meme-button">Get a new meme image</button>
            </form>
            {meme.randomImage !== "" && 
            <div className="meme-result">
                <img className="meme-image" src={meme.randomImage} alt="" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            }
        </section>
    )
}

export default Meme;