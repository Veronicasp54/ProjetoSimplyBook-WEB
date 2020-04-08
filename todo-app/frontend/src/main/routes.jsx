import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import About from '../about/about'
import Page from '../page/page'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/page' component={Page}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/home'/>
    </Router>
)