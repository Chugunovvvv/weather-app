import React from 'react'
import './Main.scss';
import ThisDay from '../ThisDay/ThisDay';
import DayInfo from '../DayInfo/DayInfo';

const Main = () => {
  return (
    <div className="main__container container">
      <div className="main__wrapper">
      <ThisDay/>
      <DayInfo/>
      </div>
    </div>
  )
}

export default Main