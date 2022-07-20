import React from 'react'
import './AboutStyles.css'

function About() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='left'>
                    <h2>HIGH CLASS REAL ESTATE IN CASCAIS BAY AREA</h2>
                    <p>If your are looking for a home close to the Atlantic ocean, in 20min reach of charming Lisboa and with the tranquility of rural Portugal you are right with us. At ESTEVES REAL ESTATE we construct your dream house/your dream appartment to come home to every night. At reasonable prices you will find real estate in a top-notch neighborhood, still growing in popularity in value. Your investment into the Cascais bay area is an investment into a relaxing way of living. We build in a sustainable way to protect our planet and local environment. In your ESTEVES REAL ESTATE house/appartment all your dreams of modern, sustainable living become true.</p>
                </div>
                <div className='right'>
                    <div className='promo'>
                        <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
                        <p className='timer'>12 HOURS LEFT!</p>
                        <p className='offers'> VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className='input-wrap'>
                            <label>Destination</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="2">Grenada</option>
                                <option value="3">Emerald Bay</option>
                                <option value="4">Bora Bora</option>
                                <option value="5">Key West</option>
                                <option value="6">Maldives</option>
                                <option value="7">Barbados</option>
                            </select>
                        </div>
                        <div className='date'>
                            <div className='input-wrap'>
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className='input-wrap'>
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default About