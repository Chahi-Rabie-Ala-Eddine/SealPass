import React, { Component } from "react";
import "../styles/login_page_component_style.css";
import "../styles/settings_component_style.css";

class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { previous_pw: "",
      new_pw:"",
      confirm_pw: ""
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*handleChange(event){ //TODO handle multiple fields from event
    this.setState({password: event.target.value});
  }*/

  handleSubmit(event) {
    alert("Password Updated"); //TODO change this to good looking stuff
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        {/*change password block*/}
        <div className="pwd_box">
          <h4 className="pwd_title">Change password : </h4>
          {/*<div className="pwd1">Previous Password</div>{" "}*/}
          <div>
            <input type="password" placeholder="Previous password" className="pwd_input_1" />
          </div>
          {/*<div className="pwd2">New Password</div>{" "}*/}
          <div>
            <input type="password" placeholder="New password" className="pwd_input_2" />
          </div>
          {/*<div className="pwd3">Confirm new Password</div>*/}
          <div>
            <input type="password" placeholder="Confirm new password" className="pwd_input_3" />
          </div>
          <div className="change_pwd_button_block">
            <button
              type="submit"
              className="change_pwd_button"
              value = "Submit"
            >
              Update master Password
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChangePasswordComponent;
