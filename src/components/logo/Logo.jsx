import React from 'react'
import './logo.css'
import LOGO from '../../assets/brandlogo3.png'

const Logo = () => {
  return (
    <div className='logo__image'>
        <img src={LOGO}></img>
    </div>
  )
}

export default Logo