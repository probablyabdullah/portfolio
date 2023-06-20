import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import {IoLogoPython} from 'react-icons/io'
import {FiFigma} from 'react-icons/fi'
import {TbHexagonLetterC} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='glowable-text-2'>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>ATMSimulator</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com/probablyabdullah/ATMSimulator" className='btn' target='_blank'>Github</a>
            <p className='lang'><TbHexagonLetterC/> C/C#</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>Foodify</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com/probablyabdullah/Foodify" className='btn' target='_blank'>Github</a>
            <p className='lang' target='_blank'><FiFigma/> Figma</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Linear-Regression-Plotter</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com/probablyabdullah/Linear-Regression-Plotter" className='btn' target='_blank'>Github</a>
            <p className='lang' target='_blank'><IoLogoPython/> Python</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Python Socket Quiz</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com/probablyabdullah/SocketQuiz" className='btn' target='_blank'>Github</a>
            <p className='lang' target='_blank'><IoLogoPython/> Python</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt=''/>
          </div>
          <h3>TCP-Port-Scanner</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com/probablyabdullah/TCP-Port-Scanner" className='btn' target='_blank'>Github</a>
            <p className='lang' target='_blank'><IoLogoPython/> Python</p>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt=''/>
          </div>
          <h3>My Portfolio Website!</h3>
          <div className="portfolio__item-cta">
            <a  href="https://github.com" className='btn' target='_blank'>Github</a>
            <p className='lang' target='_blank'><GrReactjs/> React</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio