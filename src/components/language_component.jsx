import React, { Component } from "react";

class LanguageComponent extends Component {
  state = { language: "" };

  render() {
    return (
      <form>
        {" "}
        {/*Language component*/}
        <div className="language_box">
          <h4>Language : </h4>
          <select className="language_select">
            {" "}
            {/*TODO change to language or switch language globaly?*/}
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>
      </form>
    );
  }
}

export default LanguageComponent;
