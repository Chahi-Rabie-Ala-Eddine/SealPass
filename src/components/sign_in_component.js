import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class sign_in_component extends Component {
    render() {
        return (
            <div className = "sign_up_block">
                <div className = "title_block">
                    <h3 className="sign_up_title">Sign In</h3>
                </div>
                <form>
                    <div className = "input_block">
                        <div className = "login_input"><input type="text" placeholder="Username" className = "inp"/></div>
                        <div className = "login_input"><input type="password" placeholder="Password" className = "inp"/></div>
                        <div className = "login_button_block"><button type="submit" className = "login_button">Login</button></div>
                    </div>
                </form>
                <div><h5 className = "text_sign_up">D'ont have an account ? <Link to="/sign_up" style = {{ textDecoration: 'none' }} ><span className = "red_text_sign_up">Sign up</span></Link></h5></div>
            </div>
        )
    }
}
