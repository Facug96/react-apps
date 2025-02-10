import React from 'react'
import {Link} from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className='Wrapper'>
        <p className = 'Title'> React apps - Facundo Gil</p>
        <div className = 'TodoWrapper'>

      <div>
        <Link to = "/tareas-app">
          <button className="button-text">Tareas</button>
        </Link>
      </div>
      <div>
        <Link to = "/weather-app">
          <button className="button-text">Clima</button>
        </Link>
      </div>
      <div>
        <Link to = "/crypto-track">
          <button className="button-text"> DataProject </button>
        </Link>
      </div>
        </div>
    </div>
  )
}

export default FrontPage
