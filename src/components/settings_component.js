import React, { Component } from 'react';
import '../styles/login_page_component_style.css'
import '../styles/settings_component_style.css'

export default class settings_component extends Component {
    render() {
        return (
            <div>
                <div className="red_line"/>
                <div className="settings_block">
                    <h1>Settings</h1>

                    <form> {/*email address block*/}
                        <div className="email_box">Account Address :
                            <div className="email"><input type="text" value="email.from@db.ajax" className="small_input"/></div>
                            <div className="change_email_button_block"><button type="submit" className="change_email_button">Update Email</button></div>
                        </div>
                    </form>
                    <form> {/*change password block*/}
                        <div className="pwd_box">Master Password :
                            <div className="pwd">Previous Password <input type="password" placeholder="" className="small_input"/></div>
                            <div className="pwd">New Password <input type="password" placeholder="" className="small_input"/></div>
                            <div className="pwd">Confirm new Password <input type="password" placeholder="" className="small_input"/></div>
                            <div className="change_pwd_button_block"><button type="submit" className="change_pwd_button">Change Master Password</button></div>
                        </div>
                    </form>
                    <div>Language
                        <select className="language_select">
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
