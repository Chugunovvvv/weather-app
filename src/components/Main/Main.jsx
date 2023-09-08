import React from 'react'
import './Main.scss';
import ThisDay from '../ThisDay/ThisDay';
import DayInfo from '../DayInfo/DayInfo';

const Main = () => {
  return (
    <div className="main__container container">
        <ThisDay/>
        <DayInfo/>
      
    </div>
  )
}

export default Main