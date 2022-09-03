import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlinePhone } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>ESTEVES REAL ESTATE.</h2>
            </div>

            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}> <li>HOME</li></Link>
                <Link to='developing' smooth={true} duration={500}> <li>DEVELOPING</li></Link>
                <Link to='gallery' smooth={true} duration={500}> <li>GALLERY</li></Link>
                <Link to='form' smooth={true} duration={500}> <li>BOOK A VISIT</li></Link>
                <Link to='footer' smooth={true} duration={500}> <li>CONTACT</li></Link>
            </ul>
            <div className='nav-icons'>
                <select className='icon' style={{ marginRight: '1rem' }}>
                    <option value="1">EN</option>
                    <option value="2">PT</option>
                </select>
                <a href="tel: +1-234-567-8910">
                    <AiOutlinePhone className='icon' />
                </a>
            </div>

            <div className={nav ? 'hamburger dark' : 'hamburger'} onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : <AiOutlineClose className='icon' />}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='hero' smooth ={true} duration={500}> <li>HOME</li></Link>
                <Link to='developing' smooth ={true} duration={500}> <li>DEVELOPING</li></Link>
                <Link to='gallery' smooth ={true} duration={500}> <li>GALLERY</li></Link>
                <Link to='contact' smooth ={true} duration={500}> <li>BOOK A VISIT</li></Link>
                <Link to='footer' smooth ={true} duration={500}> <li>CONTACT</li></Link> 
                </ul>
                <div className='mobile-menu-bottom'>
                    <h4>More of our exciting work:</h4>
                    <div className='social-icons'>
                        <a href="https://www.instagram.com/esteves.inc/">
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar