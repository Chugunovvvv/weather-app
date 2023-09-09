import React from 'react'
import './Header.scss';
import logo from '../../images/Headerlogo.svg'
import '../DayInfo/dayInfo.scss'
import '../ThisDay/thisDay.scss'
import search from '../../images/search.svg'
import temp from '../../images/temp.svg'
import osad from '../../images/osad.svg'
import wind from '../../images/wind.svg'
import davl from '../../images/davl.svg'
import sun from '../../images/Group.svg'
import { useWeather } from '../../hooks/useWeather';

const Header = () => {
    const {setName, name, handleClick, data } = useWeather()
    const today = new Date();
    const Hour = today.getHours()
    const Minutes = today.getMinutes()
  return (
    <>
    <header className="header">
        <div className="header__container container">
            <div className="header__logo">
                <img src={logo} alt="" className='header__image'/>
                <h1 className="header__title">
                    Weather App
                </h1>
            </div>
            <div className="header__content">
                <input onChange={e => setName(e.target.value)} type="text" className="header__input" placeholder='Введите город'/>
                <button onClick={handleClick} className="header__btn">
                    <img src={search} alt="search" className='header__img'/>
                </button>
            </div>
        </div>
    </header>
    <div className="body container">
    <div className="day">
        <div className="day__top">
            <div className="day__top-content">
            <h2 className="day__top-degree">{Math.round(data.temperature)}°</h2>
            <p className="day__top-title">Сегодня</p>
            </div>
           <img src={sun} alt="sun" className='day__top-img' />
        </div>
        <div className="day__bottom">
            <div className="day__bottom-time">Время: {Hour}:{Minutes}</div>
            <div className="day__bottom-city">Город: {name}</div>
        </div>  
    </div> 
    <div className="info">
            <div className="info__content">
                <ul className="info__list">
                    <li>
                        <div className="info__list-img">
                            <img src={temp} alt="Температура" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Температура</div>
                        <p className="info__list-subtitle">{data.temperature}°</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={davl} alt="Давление" />
                        </div>
                        <div className="info__list-content">
                            <div className="info__list-title">Давление</div>
                        <p className="info__list-subtitle">{data.pressure} мм ртутного столба - нормальное</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={osad} alt="Осадки" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Осадки</div>
                        <p className="info__list-subtitle">{data.precipitation}</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className="info__list-img">
                            <img src={wind} alt="Ветер" />
                        </div>
                        <div className="info__list-content">
                        <div className="info__list-title">Ветер</div>
                        <p className="info__list-subtitle">{data.wind}м/c юго-запад - легкий ветер</p>
                        </div>
                        
                    </li>
                </ul>
            </div>
       
    </div>
    </div>
    
    </>
  )
}

export default Header