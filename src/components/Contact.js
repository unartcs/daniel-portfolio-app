import React from 'react'
import '../styles/Contact.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si"

function Contact() {
  return (
    <div className='contact-wrapper'>
        <div className='contact-title'>Contact Me</div>
        <form className='contact-form'>
        <input type={'text'} placeholder='Name...' required name='name'></input>
        <input type={'number'} placeholder='Phone Number...' name='number'></input>
        <input type={'email'} placeholder='Email...' required name='email'></input>
        <textarea placeholder='Message...' required name='message'></textarea>
        <button className='contact-button'>Send</button>
        </form>
        <div className='socials-wrapper'>
          <BsLinkedin size={48}/>
          <BsGithub size={48} />
          <SiGmail size={48} />
        </div>
    </div>
  )
}

export default Contact