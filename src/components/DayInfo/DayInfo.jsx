import React, { useEffect, useState } from 'react'
import './dayInfo.scss'

import temp from '../../images/temp.svg'
import osad from '../../images/osad.svg'
import wind from '../../images/wind.svg'
import davl from '../../images/davl.svg'



const DayInfo = ({handleClick}) => {


  return (
    <div className="info">
       
            <div className="info__content">
                <ul className="info__list">
                    <li>
                        <div className="info__list-img">
                            <img src={temp} alt="Температура" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Температура</div>
                        <p className="info__list-subtitle">17°</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={davl} alt="Давление" />
                        </div>
                        <div className="info__list-content">
                            <div className="info__list-title">Давление</div>
                        <p className="info__list-subtitle">765 мм ртутного столба - нормальное</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={osad} alt="Осадки" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Осадки</div>
                        <p className="info__list-subtitle">Без осадков</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={wind} alt="Ветер" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Ветер</div>
                        <p className="info__list-subtitle">3 м/с юго-запад - легкий ветер</p>
                        </div>
                        
                    </li>
                </ul>
            </div>
       
    </div>
  )
}

export default DayInfo