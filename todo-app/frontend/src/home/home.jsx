import React, {Component} from 'react'
import Carousel from '../templates/carousel/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Todo extends Component{
    render() {
        return(
            <div>
                <Carousel></Carousel>
            </div>
        )
    }
}