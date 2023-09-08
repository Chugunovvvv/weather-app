import React from 'react'
import './Header.scss';
import logo from '../../images/Headerlogo.svg'
import search from '../../images/search.svg'
const Header = () => {
  return (
    <header className="header">
        <div className="header__container container">
            <div className="header__logo">
                <img src={logo} alt="" />
                <h1 className="header__title">
                    Weather App
                </h1>
            </div>
            <div className="header__content">
                <input type="text" className="header__input" placeholder='Введите город'/>
                <button className="header__btn">
                    <img src={search} alt="search" className='header__img'/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header