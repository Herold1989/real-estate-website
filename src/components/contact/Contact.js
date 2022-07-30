import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
        <div className='container'>

        <form className='form'>


        <h1>Contact Form ✉️</h1>
        <label>Name</label>
        <input placeholder='name'/>

        <label>E-Mail</label>
        <input placeholder='email'/>

        <label>Message</label>
        <textarea placeholder='message'></textarea>
        </form>

        </div>
  )
}

export default Contact