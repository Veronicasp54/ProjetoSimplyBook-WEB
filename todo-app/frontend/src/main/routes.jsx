import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import About from '../about/about'
import PageEmpresa from '../templates/login/login-empresa'
import PageColaborador from '../templates/login/login-colaborador'
import CadastroEmpresa from '../templates/cadastro/cadastro-empresa'
import CadastroColaborador from '../templates/cadastro/cadastro-colaborador'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/page-empresa' component={PageEmpresa}></Route>
            <Route path='/cadastro-empresa' component={CadastroEmpresa}></Route>
        <Route path='/page-colaborador' component={PageColaborador}/>
            <Route path='/cadastro-colaborador' component={CadastroColaborador}></Route>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/home'/>
    </Router>
)