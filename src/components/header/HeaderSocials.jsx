import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/probablyabdullah' target='_blank'><FaGithub/></a>
        <a href='https://www.figma.com/files/user/1168871039442841178?fuid=1168871039442841178' target='_blank'><FiFigma/></a>
    </div>
  )
}

export default HeaderSocials