import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import About from '../about/about'
import PageEmpresa from '../templates/login/login-empresa'
import PageColaborador from '../templates/login/login-colaborador'
import CadastroEmpresa from '../templates/cadastro/cadastro-empresa'
import CadastroColaborador from '../templates/cadastro/cadastro-colaborador'
import ReservasColaborador from '../templates/area-colaborador/templates/reservas'
import CalendarioColaborador from '../templates/area-colaborador/templates/calendario'
import PerfilColaborador from '../templates/area-colaborador/templates/perfil'
import SalasColaborador from '../templates/area-colaborador/templates/salas-colaborador'

import ReservasEmpresa from '../templates/area-empresa/templates/reservas-adm'
import CalendarioEmpresa from '../templates/area-empresa/templates/calendario'
import PerfilEmpresa from '../templates/area-empresa/templates/perfil'
import SalasEmpresa from '../templates/area-empresa/templates/salas-empresa'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>

        <Route path='/page-empresa' component={PageEmpresa}></Route>
            <Route path='/cadastro-empresa' component={CadastroEmpresa}></Route>
             
            <Route path='area-empresa/minhas-reservas' component={ReservasEmpresa}></Route>
            <Route path='area-empresa/calendario' component={CalendarioEmpresa}></Route>
            <Route path='area-empresa/perfil' component={PerfilEmpresa}></Route>
            <Route path='area-empresa/salas-empresa' component={SalasEmpresa}></Route>

        <Route path='/page-colaborador' component={PageColaborador}/>
            <Route path='/cadastro-colaborador' component={CadastroColaborador}></Route>
        
            <Route path='area-colaborador/minhas-reservas' component={ReservasColaborador}></Route>
            <Route path='area-colaborador/calendario' component={CalendarioColaborador}></Route>
            <Route path='area-colaborador/perfil' component={PerfilColaborador}></Route>
            <Route path='area-colaborador/salas-colaborador' component={SalasColaborador}></Route>
            
   


        <Route path='/about' component={About}/>
        <Redirect from='*' to='/home'/>
    </Router>
)