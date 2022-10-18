import React from "react"
import './Card.css'
import katie from "../assets/Cards/katie-zaferes.png"
import star from "../assets/Cards/star.png"

function Card() {
    return (
        <section className="courses">
            <div className="card">
                <img className="katies-img" src={katie} alt="Katie Zaferes" />
                <article className="lesson">
                    <div className="lesson-infos">
                        <img className="lesson-infos-star" src={star} alt="star" />
                        <span className="lesson-rating">5.0 </span>
                        <span className="total-lesson-ratings">(6)</span>
                        <span className="teacher-location">USA</span>
                    </div>
                    <p className="lesson-description">Life lessons with Katie Zaferes</p>
                    <p className="pricing">
                        <span className="from-price">From $136</span>
                        <span> / person</span>
                    </p>
                </article>
            </div>
            <div className="card">
                <img className="katies-img" src={katie} alt="Katie Zaferes" />
                <article className="lesson">
                    <div className="lesson-infos">
                        <img className="lesson-infos-star" src={star} alt="star" />
                        <span className="lesson-rating">5.0 </span>
                        <span className="total-lesson-ratings">(6)</span>
                        <span className="teacher-location">USA</span>
                    </div>
                    <p className="lesson-description">Life lessons with Katie Zaferes</p>
                    <p className="pricing">
                        <span className="from-price">From $136</span>
                        <span> / person</span>
                    </p>
                </article>
            </div>
        </section>   
    )
}

export default Card;