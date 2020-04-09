import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import About from '../about/about'
import PageEmpresa from '../pages/pageEmpresa'
import PageColaborador from '../pages/pageColaborador'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/page-empresa' component={PageEmpresa}/>
        <Route path='/page-colaborador' component={PageColaborador}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/home'/>
    </Router>
)