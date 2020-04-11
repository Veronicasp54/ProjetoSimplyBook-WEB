import React from 'react'
import { Carousel } from "react-responsive-carousel";
import PrimeiroSlide from '../../../public/assets/images/SlideUm.png'
import SegundoSlide from '../../../public/assets/images/SlideDois.png'
import TerceiroSlide from '../../../public/assets/images/SlideTres.png'
import '../../../public/assets/css/carousel.css'

export default () => (
    <div className='carousel-border'>
        <Carousel  infiniteLoop={true} showThumbs={false} useKeyboardArrows={true} autoPlay className="carousel">
            <div>
            <img src={PrimeiroSlide} />
            <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src= {SegundoSlide} />
            <p className="legend">Legend 2</p>
            </div>
            <div>
            <img src={TerceiroSlide} />
            <p className="legend">Legend 3</p>
            </div>
        </Carousel>
  </div>
);
