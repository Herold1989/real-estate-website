import React from 'react'
import './HeroStyles.css'

import HeroImage from '../../assets/hero_main.jpg'

function Hero() {
    return (
        <div className="hero">
            <img src={HeroImage} alt="/"/>
        </div>
    )
}

export default Hero