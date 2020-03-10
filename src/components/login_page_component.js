import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/login_page_component_style.css';
import logo from '../assets/images/logo.png';
import Sign_in from './sign_in_component';
import Sign_up from './sign_up_component';

export default class login_page_component extends Component {
    render() {
        return (
            <div>
                <div className = "red_line"></div>
                <div className = "login_block">
                    <img src={logo} alt="Logo" className = "logo"/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Sign_in}/>
                            <Route path="/sign_in" component={Sign_in}/>
                            <Route path="/sign_up" component={Sign_up}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
