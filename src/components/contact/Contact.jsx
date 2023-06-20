import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_menn86f', 'template_5gp8ujn', form.current, '16oKCvksyKCbLG-W_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='glowable-text-2'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='header__forgotten'>abdumanakh21@gmail.com</h5>
            <a href='mailto:abdumanakh21@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5 className='header__forgotten'>probablyabdullah</h5>
            <a href='https://instagram.com/probablyabdullah?igshid=ZGUzMzM3NWJiOQ==' target='_blank'>DMs are open!</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5 className='header__forgotten'>Requires Whatsapp installed</h5>
            <a href='https://api.whatsapp.com/send?phone=918828341557' target='_blank'>Talk to Me!</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact