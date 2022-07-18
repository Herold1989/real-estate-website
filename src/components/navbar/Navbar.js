import React from 'react'

import './NavbarStyles.css'

function Navbar() {
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

        </div>
    )
}

export default Navbar