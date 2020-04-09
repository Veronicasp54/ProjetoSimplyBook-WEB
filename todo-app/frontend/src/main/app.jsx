import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../../public/assets/css/carousel.css'
import '../../public/assets/css/footer.css'
import '../../public/assets/css/menu.css'
import '../../public/assets/css/all.css'
import '../../public/assets/css/pageColaborador.css'
import '../../public/assets/css/pageEmpresa.css'


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