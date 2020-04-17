import React, {Component} from 'react'
import Carousel from '../templates/carousel/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from '../templates/menu'
import Footer from '../templates/footer'
export default class Todo extends Component{
    render() {
        return(
            <div>
                <Menu/>
                <Carousel></Carousel>
                <Footer/>
            </div>
        )
    }
}