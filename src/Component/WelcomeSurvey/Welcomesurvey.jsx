import React from 'react'
import './Welcomesurvey.css'

function Welcomesurvey({ onStart }) {
  return (
    <div className='welcomesurvey'>
       <div className="welcome-inner">
      <h1 className='welcome' style={{fontSize: '2rem'}}>Welcome to Our Custumer Survey</h1>
      <button className='start-btn' onClick={onStart}>Start Survey</button>
      </div>
    </div>
  )
}

export default Welcomesurvey
