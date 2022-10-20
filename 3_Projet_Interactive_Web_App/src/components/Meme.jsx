import React, { useEffect } from "react"
import {useState} from "react"
import "./Meme.css"
import Signature from "./Signature.jsx"

/* import memedata from "..data_remplacee_par_requete_apiDATA_REMPLACEE_PAR_REQUETE_API.js" */

function Meme () {

    const [allMemeImages, setAllMemeImages] = useState([]);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
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
    
    /* useEffect */

    useEffect(function() { 
        console.log("fetching API");
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
            .then(console.log("API FETCHED, DATA GATHERED INTO STATE"))
    }, [])



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
            <Signature className="signature" />
        </section>
    )
}

export default Meme;