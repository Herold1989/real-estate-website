import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'



import './NavbarStyles.css'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className="navbar">

            <div className="logo">
                <h2>ESTEVES REAL ESTATE.</h2>
            </div>

            <ul className="nav-menu">
                <li>HOME</li>
                <li>DEVELOPING</li>
                <li>GALLERY</li>
                <li>BOOK A VISIT</li>
                <li>CONTACT</li>
            </ul>

            <div className="cellular">CALL ME: +1234-567-8910</div>

            {/* <div className='hamburger' onClick={handleNav}>
                 <HiOutlineMenuAlt4 className='icon' />
             </div> */}
            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : <AiOutlineClose className='icon' />}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>HOME</li>
                    <li>DEVELOPING</li>
                    <li>GALLERY</li>
                    <li>BOOK A VISIT</li>
                    <li>CONTACT</li>
                </ul>
                <div className='mobile-menu-bottom'>
                    <h4>More of our exciting work:</h4>
                    <div className='social-icons'>
                        <a href="https://www.instagram.com/esteves.inc/">
                        <FaInstagram className='icon'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar