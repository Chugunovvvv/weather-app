import React from 'react'
import './Cards.scss';
import cards from '../../data/data';
import Card from '../Card/Card';


const Cards = () => {
  return (
    <div className="cards">
        <div className="cards__container container">

            {cards.map((item, index) => {
                return (<Card key={index} day={item.day} date={item.date} img={item.img} temp={item.temperature} info={item.info}  />)
            })}
           
        </div>
    </div>
  )
}

export default Cards