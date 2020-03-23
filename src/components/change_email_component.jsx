import React, { Component } from "react";
import "../styles/login_page_component_style.css";
import "../styles/settings_component_style.css";

class ChangeEmailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "email.from@db.ajax" }; /*TODO Get email from server*/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    alert("Email Updated" + this.state.email); //TODO change this to good looking stuff
    event.preventDefault();
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
          </div>
          <div className="change_email_button_block">
            <button type="submit" className="change_email_button" value="Submit">
              Update Email
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChangeEmailComponent;
