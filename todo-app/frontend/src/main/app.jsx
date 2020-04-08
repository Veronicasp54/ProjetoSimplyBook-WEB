import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../templates/css/carousel.css'
import '../templates/css/footer.css'
import '../templates/css/containers.css'

import React from 'react'
import Menu from '../templates/menu'
import Routes from './routes'
import Footer from '../templates/footer'

export default props => (
    <div className = 'container'>
        <Menu/>
        <Routes/>
        <Footer/>
    </div>
)