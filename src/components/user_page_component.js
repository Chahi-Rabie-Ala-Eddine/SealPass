import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/user_page_component_style.css'
import logo from '../assets/images/Logo_user_interface.png'

import Home from './home_component'
import Passwords from './passwords_component'
import Cards from './cards_component'
import Cloud from './cloud_component'
import settings from './settings_component'

export default class user_page_component extends Component {
    render() {
        return (
            <div>
                <header className = "topbar">
                    <a href = "#" className = "topbar-logo"><img src={logo} alt="Logo" className = "logo"/></a>
                    <nav className = "topbar_nav">
                        <a href = "#" >About</a>
                        <a href = "#" >Help</a>
                        <a href = "#" >Contact</a>
                    </nav>
                </header>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/passwords" component={Passwords}/>
                            <Route path="/cards" component={Cards}/>
                            <Route path="/cloud" component={Cloud}/>
                            <Route path="/settings" component={settings}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
