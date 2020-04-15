import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import About from '../about/about'
import PageEmpresa from '../templates/login/login-empresa'
import PageColaborador from '../templates/login/login-colaborador'
import CadastroEmpresa from '../templates/cadastro/cadastro-empresa'
import CadastroColaborador from '../templates/cadastro/cadastro-colaborador'
import AreaColaborador from '../templates/area-colaborador/home-colab'
import AreaEmpresa from '../templates/area-empresa/home-empr'


export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>

        <Route path='/page-empresa' component={PageEmpresa}></Route>
            <Route path='/cadastro-empresa' component={CadastroEmpresa}></Route>

            <Route path='/area-empresa' component={AreaEmpresa}></Route>

        <Route path='/page-colaborador' component={PageColaborador}/>
            <Route path='/cadastro-colaborador' component={CadastroColaborador}></Route>

            <Route path='/area-colaborador' component={AreaColaborador}></Route>
            {/* <Link to="/area-colaborador" className="btn">Entrar</Link> */}

        <Route path='/about' component={About}/>
        <Redirect from='*' to='/home'/>
    </Router>
)