import React from "react"
import './Card.css'
import katie from "../assets/Cards/katie-zaferes.png"
import star from "../assets/Cards/star.png"

function Card(props) {

    // DEFINIR LE TEXTE DU BADGE SELON data
    // PRIORITE AU SOLD OUT -> DONC ELSE IF JS "VANILLA"
    // SI PREMIERE CONDITION REMPLIE, SEUL CODE 
    // POUR CELLE-CI SERA EXECUTEE
    // affichage -> {badgeText && <...> = IF badgeText vérifié }

    let badgeText = "";
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
            <div className="card" id={props.item.id}>
                {badgeText && <div className="card-badge">{badgeText}</div> }

                <img className="card-img" src={`/src/assets/Cards/${props.item.coverImg}`} alt={props.item.imgAlt} />
                <article className="lesson">
                    <div className="lesson-infos">
                        <img className="lesson-infos-star" src={star} alt="star" />
                        <span className="lesson-rating">{props.item.stats.rating.toFixed(1)}</span>
                        <span className="total-lesson-ratings">({props.item.stats.reviewCount})</span>
                        <span className="teacher-location">{props.item.country}</span> 
                    </div>
                    <p className="lesson-description">{props.item.title}</p>
                    <p className="pricing">
                        <span className="from-price">${props.item.price}</span>
                        <span> / person</span>
                    </p>
                </article>
            </div>
    )
}

export default Card;