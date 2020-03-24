import React, { Component } from "react";
import "../styles/login_page_component_style.css";
import "../styles/settings_component_style.css";

class ChangeEmailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email.from@db.ajax",
      emailError: "",
    }; /*TODO Get email from server*/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const isValid =this.validate();
    if (isValid){
      this.setState({emailError : "✓"});
    }
    event.preventDefault();
  }

  validate(){
    let emailError = "";
    var reg = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
    if(!reg.test(this.state.email)){ //TODO REGEX
      emailError="Invalid email";
    }

    if(emailError){
      this.setState({emailError: emailError});
      return false;
    }
    return true;
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        {/*email address block*/}
        <div className="email_box">
          <h4> Change email address : </h4>
          <div className="email">
            <input
              type="text"
              defaultValue={this.state.email}
              className="email_input"
              onChange={this.handleChange}
            />
            <div className="emailError">{this.state.emailError}</div>
          </div>
          <div className="change_email_button_block">
            <button
              type="submit"
              className="change_email_button"
              value="Submit"
            >
              Update Email
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChangeEmailComponent;
