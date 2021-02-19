import React from 'react'
import './Card.scss'

function Card({ src, title, description, price }) {
    return (
        <div className="card">
            <img src={src} alt={title} />
            <div className="card__info">
                <h6>{title}</h6>
                <p>{description}</p>
                <p className="card__infoPrice">{price}</p>
            </div>
        </div>
    )
}

export default Card
