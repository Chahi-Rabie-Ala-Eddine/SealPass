import React, { Component } from "react";
import "../styles/login_page_component_style.css";
import "../styles/settings_component_style.css";

class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { previousPwd: "", newPwd: "", confirmPwd: "", pwdError: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    const isValid = this.validate();
    if(isValid) {
      this.setState({ pwdError: "" });
    }
    alert("prevPwd : " + this.state.previousPwd +" newPwd : " +this.state.newPwd+ " confirmPwd " + this.state.confirmPwd );
    event.preventDefault();
  }

  validate() { //password validation
    let pwdError = "";
    if (this.state.newPwd !== this.state.confirmPwd) {
      pwdError = "Passwords don't match";
    }
    if (pwdError) {
      this.setState({pwdError: pwdError});
      return false;
    }
    return true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        {/*change password block*/}
        <div className="pwd_box">
          <h4 className="pwd_title">Change password : </h4>
          <div className="pwd">
            <input
              type="password"
              placeholder="Previous password"
              value={this.state.previousPwd}
              className="pwd_input_1"
              name="previousPwd"
              onChange={this.handleChange}
            />
          </div>
          <div className="pwd">
            <input
              type="password"
              placeholder="New password"
              className="pwd_input_2"
              name="newPwd"
              value={this.state.newPwd}
              onChange={this.handleChange}
            />
            <div className="pwdError">{this.state.pwdError}</div>
          </div>
          <div className="pwd">
            <input
              type="password"
              placeholder="Confirm new password"
              className="pwd_input_3"
              name="confirmPwd"
              value={this.state.confirmPwd}
              onChange={this.handleChange}
            />
            <div className="pwdError">{this.state.pwdError}</div>
          </div>
          <div className="change_pwd_button_block">
            <button type="submit" className="change_pwd_button" value="Submit">
              Update master Password
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChangePasswordComponent;
