import React from 'react'
import "./Card.css"

const Card = ({image, title = "This is a Sample title"}) => {
  return (
    <div className='main-card'>
        <div className='card-layout'>
            <div className='card-image'>
                <img src={image} alt="image" />
            </div>
            <div className='card-title'>
                <span>{title}</span>
            </div>
        </div>
    </div>
  )
}

export default Card