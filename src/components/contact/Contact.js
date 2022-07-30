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
        <button type='submit'>Submit Message</button>
        </form>

        </div>
  )
}

export default Contact