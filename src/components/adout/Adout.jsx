import React from 'react'
import './adout.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Adout = () => {
  return (
    <section id='adout'>
      <h5>Get To Know</h5>
      <h2 className='glowable-text-2'>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>B-Tech CSE @ PESU<br></br>Delhi Public School, Navi Mumbai</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Project Partners</h5>
              <small>20+ Collaborators</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ on GitHub<br></br>Many more in the works!</small>
            </article>
          </div>

          <p>
            Hey there, Abdullah here!
            <br></br> I'm an ambitious and strongly-driven 3rd year B.Tech student in
            Computer Science with a keen eye for design and front-end and ample knowledge of the other end too. I'm a quick learner with great leadership skills and am ever eager to contribute to the success of a dynamic team.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Adout