import React from "react"
import './Card.css'
import katie from "../assets/Cards/katie-zaferes.png"
import star from "../assets/Cards/star.png"

function Card(props) {
    return (
            <div className="card" id={props.id}>
                <img className="card-img" src={`/src/assets/Cards/${props.coverImg}`} alt={props.imageAlt} />
                <article className="lesson">
                    <div className="lesson-infos">
                        <img className="lesson-infos-star" src={star} alt="star" />
                        <span className="lesson-rating">{props.rating.toFixed(1)}</span>
                        <span className="total-lesson-ratings">({props.reviewCount})</span>
                        <span className="teacher-location">{props.location}</span> 
                    </div>
                    <p className="lesson-description">{props.title}</p>
                    <p className="pricing">
                        <span className="from-price">${props.price}</span>
                        <span> / person</span>
                    </p>
                </article>
            </div>
    )
}

export default Card;