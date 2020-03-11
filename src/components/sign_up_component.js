import React, { Component } from 'react';//import de React
import { Link } from 'react-router-dom';//import du composant 'Link' pour gérer les liens des différentes routes

//Exportation du composant 'Sign_up_component'
export default class sign_upsign_up_component extends Component {
    render() {
        return (
            // structure du composant
            <div className = "sign_up_block">
                <div className = "sign_up_title_block">
                    <h3 className="sign_up_title">Sign Up</h3>
                </div>
                {/* formulaire d'inscription */}
                <form>
                    <div className = "input_block">
                        <div className = "sign_up_input"><input type="text" placeholder="Username" className = "sign_up_inp"/></div>
                        <div className = "sign_up_input"><input type="password" placeholder="Password" className = "sign_up_inp"/></div>
                        <div className = "sign_up_input"><input type="password" placeholder="Confirm Password" className = "sign_up_inp"/></div>
                        <div className = "sign_up_button_block"><button type="submit" className = "login_button">Sign Up</button></div>
                    </div>
                </form>
                {/* le lien vers la route pour acceder au composant sign_in */}
                <div><h5 className = "text_sign_up">Already have an account ? <Link to="/" className="link" style = {{ textDecoration: 'none' }} ><span className = "red_text_sign_up">Sign In</span></Link></h5></div>
            </div>
        )
    }
}
