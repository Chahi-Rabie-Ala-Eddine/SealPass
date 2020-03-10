import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class sign_upsign_up_component extends Component {
    render() {
        return (
            <div className = "sign_up_block">
                <div className = "sign_up_title_block">
                    <h3 className="sign_up_title">Sign Up</h3>
                </div>
                <form>
                    <div className = "input_block">
                        <div className = "sign_up_input"><input type="text" placeholder="Username" className = "sign_up_inp"/></div>
                        <div className = "sign_up_input"><input type="password" placeholder="Password" className = "sign_up_inp"/></div>
                        <div className = "sign_up_input"><input type="password" placeholder="Confirm Password" className = "sign_up_inp"/></div>
                        <div className = "sign_up_button_block"><button type="submit" className = "login_button">Sign Up</button></div>
                    </div>
                </form>
                <div><h5 className = "text_sign_up">Already have an account ? <Link to="/" className="link" style = {{ textDecoration: 'none' }} ><span className = "red_text_sign_up">Sign In</span></Link></h5></div>
            </div>
        )
    }
}
