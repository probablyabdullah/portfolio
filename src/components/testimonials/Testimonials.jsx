import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>A Collection Of</h5>
      <h2 className='glowable-text-2'>Certifications</h2>

      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One'/>
          </div>
            <h5 className='client__name'>Problem Solving (Basic)</h5>
            <small className='client__review'>
            <b>HackerRank - Online<br></br>Feb 2023 - Apr 2023</b><br></br>Basic Problem Solving in Python and C certification course with 25+ problems.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One'/>
          </div>
            <h5 className='client__name'>Problem Solving (Intermediate)</h5>
            <small className='client__review'>
            <b>HackerRank - Online<br></br>Feb 2023 - Apr 2023</b><br></br>More complex Problem Solving in Python and C certification course with 40+ problems.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='Avatar One'/>
          </div>
            <h5 className='client__name'>A Beginner's Guide To Linux Kernel Development</h5>
            <small className='client__review'>
            <b>The Linux Foundation - Online<br></br>Jan 2023 - Mar 2023</b><br></br>Foundation course for the fundamentals of Kernel Development for Linux-Based systems.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt='Avatar One'/>
          </div>
            <h5 className='client__name'>UI/UX Design With Figma And WebFlow</h5>
            <small className='client__review'>
            <b>PESU/IO By PES University, Bangalore<br></br>Sep 2022 - Dec 2022</b><br></br>UI/UX Design using industry-level Figma for front-end design and basic Webflow to get it up and running.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials