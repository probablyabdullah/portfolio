import React from 'react'
import './footer.css'
import {BsSpotify} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abdullah Khan</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#adout'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://open.spotify.com/user/s1uyo97m14snrsh9zhq20y943?si=YEJM9ipgSHOz37YSKlVKpA' target='_blank'><BsSpotify/></a>
        <a href='https://twitter.com/abdullahtwts?s=09' target='_blank'><BsTwitter/></a>
        <a href='https://www.reddit.com/u/probablyabdullah?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button' target='_blank'><BsReddit/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdullah Amal Khan 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer