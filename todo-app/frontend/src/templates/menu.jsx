import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fas fa-couch'></i>
                    SIMPLY BOOK
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/home'>Home</a></li>
                    <li><a href='#/page'>PageCadastro</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>

        </div>
    </nav>

)