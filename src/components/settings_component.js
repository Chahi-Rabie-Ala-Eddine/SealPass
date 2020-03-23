import React, { Component } from "react";
import ChangePasswordComponent from "./change_password_component";
import ChangeEmailComponent from "./change_email_component";
import LanguageComponent from "./language_component";
import "../styles/login_page_component_style.css";
import "../styles/settings_component_style.css";

export default class settings_component extends Component { /*TODO turn into stateless?*/
  render() {
    return (
      <main>
        <div className="red_line" />
        <div className="settings_block">
          <h1>Settings</h1>
          <ChangeEmailComponent />
          <hr className="hr_line"/>
          <ChangePasswordComponent />
          <hr className="hr_line"/>
          <LanguageComponent />
        </div>
      </main>
    );
  }
}
