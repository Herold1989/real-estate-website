import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlinePhone} from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'



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
                <li>HOME</li>
                <li>DEVELOPING</li>
                <li>GALLERY</li>
                <li>BOOK A VISIT</li>
                <li>CONTACT</li>
            </ul>
            <div className='nav-icons'>
                    <select className='icon' style={{marginRight: '1rem'}}>
                        <option value="1">EN</option>
                        <option value="2">PT</option>
                    </select>
                <AiOutlinePhone className='icon' />
            </div>

            <div className={nav ? 'hamburger dark' : 'hamburger'} onClick={handleNav}>
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
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar