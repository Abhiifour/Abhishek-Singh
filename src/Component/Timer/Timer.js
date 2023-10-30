import React from 'react'
import './Timer.scss'

function Timer(props) {
  return (
    <div className="Timer-main">
    
        <div className="box">
            <div className="first">00</div>
            <div className="second">Hours</div>
        </div>

        <div className="box2">:</div>

        <div className="box">
            <div className="first">00</div>
            <div className="second">Minutes</div>
        </div>

        <div className="box2">:</div>


        <div className="box">
            <div className="first">{props.data}</div>
            <div className="second">Seconds</div>
        </div>

    </div>
  )
}

export default Timer