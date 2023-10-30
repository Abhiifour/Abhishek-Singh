import React from 'react';
import './Rocket.scss';
import center from './Rocketcenter.png'
import tail from './Rockettail.png'
import body from './Rocketouter.png'

function Rocket() {
  return (
    <div className="Rocket-main">
       <div className="outer">
        <img src={body} alt="Rocket" />
       </div>
       <div className="tail">
        <img src={tail} alt="Rocket" />
       </div>
       <div className="center">
        <img src={center} alt="Rocket" />
       </div>
    </div>
  )
}

export default Rocket;