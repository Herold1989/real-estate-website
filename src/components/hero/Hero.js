import React from 'react'
import './HeroStyles.css'

import HeroImage from '../../assets/hero_main.jpg'

function Hero() {
    return (
        <div className="hero">
            <img src={HeroImage} alt="/"/>
            <div className='overlay'></div>
            <div className='content'>
                <h1>FIND YOUR PLACE</h1>
                <h2 style={{padding: '1rem'}}>To Come Home To At Night.</h2>
            </div>
        </div>
    )
}

export default Hero