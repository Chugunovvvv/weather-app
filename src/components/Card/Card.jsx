import React from 'react'
import './Card.scss'

const Card = ({day, date, img, temp, info}) => {
  return (
    <div className="card">
        <div className="card__container container">
            <div className="card__day">{day}</div>
            <div className="card__date">{date}</div>
            <img src={img} alt="" className='card__img'/>
            <div className="card__temp">{temp}</div>
            <div className="card__info">{info}</div>
        </div>
    </div>
  )
}

export default Card