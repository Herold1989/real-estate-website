import React from 'react'
import './AboutStyles.css'
import Certificate from '../../assets/certificate.jpeg'

function About() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='left'>
                        <h2>HIGH CLASS REAL ESTATE IN CASCAIS BAY AREA</h2>
                        <p>If your are looking for a home close to the Atlantic ocean, in 20min reach of charming Lisboa and with the tranquility of rural Portugal you are right with us. At ESTEVES REAL ESTATE we construct your dream house/your dream appartment to come home to every night. At reasonable prices you will find real estate in a top-notch neighborhood, still growing in popularity in value. Your investment into the Cascais bay area is an investment into a relaxing way of living. We build in a sustainable way to protect our planet and local environment. In your ESTEVES REAL ESTATE house/appartment all your dreams of modern, sustainable living become true.</p>
                        <div>
                            <div>
                                <div>
                                    <img src={Certificate} alt="/" style={{ marginRight: '1rem',width: '196px', height: 'auto', padding: '2rem', display: 'flex', margin: 'auto'}} />
                                </div>
                                <div>
                                    <h3>REAL ESTATE EXPERT - FOR 20 YEARS</h3>
                                    <p>Certified by the Portuguese National Association of Realtors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='map'>
                            <iframe title="Where we are" width="350" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Praia%20de%20Sao%20Pedro%20de%20Estoril&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About