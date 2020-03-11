//Composant 'Sign_In' pour la connection

import React, { Component } from 'react';//import de React
import { Link } from 'react-router-dom';//import du composant 'Link' pour gérer les liens des différentes routes

//Exportation du composant 'Sign_in_component'
export default class sign_in_component extends Component {
    render() {
        return (
            // structure du composant
            <div className = "sign_up_block">
                <div className = "title_block">
                    <h3 className="sign_up_title">Sign In</h3>
                </div>
                {/* formulaire de connection */}
                <form>
                    <div className = "input_block">
                        <div className = "login_input"><input type="text" placeholder="Username" className = "inp"/></div>
                        <div className = "login_input"><input type="password" placeholder="Password" className = "inp"/></div>
                        <div className = "login_button_block"><button type="submit" className = "login_button">Login</button></div>
                    </div>
                </form>
                {/* le lien vers la route pour acceder au composant sign_up */}
                <div>
                    <h5 className = "text_sign_up"> D'ont have an account ? <Link to="/sign_up" style = {{ textDecoration: 'none' }} ><span className = "red_text_sign_up">Sign up</span></Link></h5>
                </div>
            </div>
        )
    }
}
