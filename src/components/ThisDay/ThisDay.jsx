import React from 'react'
import './thisDay.scss';
import sun from '../../images/Group.svg'
const ThisDay = () => {
  return (
    <div className="day">
       
        <div className="day__top">
            <div className="day__top-content">
            <h2 className="day__top-degree">20°</h2>
            <p className="day__top-title">Сегодня</p>
            </div>
           <img src={sun} alt="sun" />
        </div>
        <div className="day__bottom">
            <div className="day__bottom-time">Время: 21:54</div>
            <div className="day__bottom-city">Город: Санкт-Петербург</div>
        </div>
        
  
    </div>
  )
}

export default ThisDay