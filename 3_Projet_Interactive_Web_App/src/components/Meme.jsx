import React from "react"
import {useState} from "react"
import "./Meme.css"
import memedata from "../data/memedata.js"

function Meme () {

    const [allMemeImages, setAllMemeImages] = useState(memedata);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    /*
    const [memeImage, setMemeImage] = useState("");
    */

    // let randomMeme = "";
    // console.log(randomMeme);

    function getMeme () {
        const memes = allMemeImages.data.memes;
        const rdm = Math.floor(Math.random() * memes.length);
        // console.log(memes[rdm]);

    setMeme(prev => ({
        ...prev,
        randomImage: memes[rdm].url,
    }))   
    /*
    setMeme(prev => {
        return {
            ...prev,
            randomImage: memes[rdm].url,
        }
    })
    */

        /*
        randomMeme = {
            id: memes[rdm].id,
            name: memes[rdm].name,
            url: memes[rdm].url,
            width: memes[rdm].width,
            height: memes[rdm].height,
            box_count: memes[rdm].box_count
        };
        console.log(randomMeme);
        */
    }

    return (
        <section className="memeGenerator">
            
            <form onSubmit={(e) => {e.preventDefault();}}className="meme-form" action="">
                <div className="text-inputs">
                    <label htmlFor="topTextInput" hidden>Top text</label>
                    <input className="top-text-tnput" name="topTextInput" type="text" placeholder="Top text" />
                    <label htmlFor="bottomTextInput" hidden>Bottom text</label>
                    <input className="bottom-text-input" name="bottomTextInput" type="text" placeholder="Bottom text" />
                </div>
                <button onClick={getMeme} className="get-meme-button">Get a new meme image</button>
            </form>
            {meme.randomImage !== "" && <img className="meme-image" src={meme.randomImage} alt="" />}
        </section>
    )
}

export default Meme;