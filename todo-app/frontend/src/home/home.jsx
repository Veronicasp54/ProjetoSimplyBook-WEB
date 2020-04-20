import React, {Component} from 'react'
import Carousel from '../templates/carousel/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from '../componentes/menu'
import Footer from '../componentes/footer'
import '../../public/assets/css/home.css'

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