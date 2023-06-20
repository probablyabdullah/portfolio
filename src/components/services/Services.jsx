import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>More About Me</h5>
      <h2 className='glowable-text-2'>Accomplishments</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Positions of Responsibility</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Entrepreneurship Club's Social Media & Marketing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3rd position at the SHE-Summit Women IdeaChallenge.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Marketing team for PES University MAAYA-2022 Fest.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DPS Yearbook designer based on the Netflix Landing Page.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Head of Marketing of the DPS Mumbai Yearbook 2020.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Former prefect andHouse Captain for Ganga, DPS Mumbai.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Extra-Curricular Achievements</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>The Singapore International MUN - Best Delegate for Belgium.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>The Virtual Moot World Affairs Conference - Best Delegate.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apeejay International, Mumbai MUN - Best Delegate for Russia.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PODAR - Drishti 2020 Conference : Runner Up in Crisis speaking.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>National Financial Literary Assesment Test : Distinction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Kukkiwon & World Taekwondo Federation : Dan 1 Black Belt</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>20+ Regional medals in olympiads by Science Olympiad Foundation</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Sports</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>District Silver Medallist - Taekwondo SPARRING 60kg 2018.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>National-level Inter-DPS Basketball West Region Representative.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intra-DPS Basketball Captain - Gold and Silver (2018 & 2019).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Spirit Taekwondo Competition - SPARRING Silver 2017 65kg.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Spirit Taekwondo Competition - SPARRING Bronze 2018 65kg.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>6 years of Horse-Riding experience at the DPS Horse Riding Club.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services