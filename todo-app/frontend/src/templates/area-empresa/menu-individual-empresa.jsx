import React from 'react'
import '../../../public/assets/css/menu.css'

// import Logo from '../../public/assets/images/logo.png'

export default props => (
    <nav className='navbar navbar-light bg-dark' className='navbar-default'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'id='title'>
                    <i className='fas fa-couch'></i>
                    SIMPLY BOOK
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse' className='menu'>
                <ul className='nav navbar-nav navbar-ligth' >
                    {/* <li class="brand"><img id="logo" src={Logo} alt="SIMPLY BOOK"/></li> */}
                    <li><a href='#/area-empresa/minhas-reservas'>Reservas</a></li>
                    <li><a href='#/area-empresa/calendario'>Calendário</a></li>
                    <li><a href='#/area-empresa/salas-empresa'>Salas</a></li>
                    <li><a href='#/area-empresa/perfil'>Perfil</a></li>
                </ul>
            </div>

        </div>
    </nav>

)