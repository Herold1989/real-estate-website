import React from 'react'
import './DevelopingStyles.css'

import Cascais from '../../assets/cascais.jpeg'
import Cascais2 from '../../assets/cascais2.jpeg'
import Cascais3 from '../../assets/cascais3.jpeg'
import Cascais4 from '../../assets/cascais4.jpeg'
import Cascais5 from '../../assets/cascais5.jpeg'



function Developing() {
  return (
    <div className='developing'>
            <div className="container">
                <h1>LUXURY REAL ESTATE</h1>
                <p>BETWEEN LISBON AND CASCAIS</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Cascais} alt="/"/>
                    <img src={Cascais2} alt="/"/>
                    <img src={Cascais3} alt="/"/>
                    <img src={Cascais4} alt="/"/>
                    <img src={Cascais5} alt="/"/>
                </div>
            </div>
        </div>
  )
}

export default Developing