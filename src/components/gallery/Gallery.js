import React from 'react'
import './GalleryStyles.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Cascais from '../../assets/cascais.jpeg'
import Cascais2 from '../../assets/cascais2.jpeg'
import Cascais3 from '../../assets/cascais3.jpeg'
import Cascais4 from '../../assets/cascais4.jpeg'
import Cascais5 from '../../assets/cascais5.jpeg'

function ImgGallery() {
    return (
        <div name='gallery' className='container'>
            <div className='header'>
                <h1>Project Gallery</h1>
                <p>Check out our exciting projects for sale!</p>
            </div>
            <Carousel className='gallery' showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={Cascais} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Cascais2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Cascais3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={Cascais4} />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img src={Cascais5} />
                    {/* <p className="legend">Legend 5</p> */}
                </div>

            </Carousel>
        </div>
    )
}

export default ImgGallery