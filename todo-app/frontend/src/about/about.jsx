import React, {Component} from 'react'
import Carousel from '../templates/carousel/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from '../templates/menu'
import Footer from '../templates/footer'
import AboutConteudo from '../about/conteudo-about'

export default class About extends Component{
    render() {
        return(
            <div>
                <Menu/>
                <AboutConteudo/>
                <Footer/>
            </div>
        )
    }
}