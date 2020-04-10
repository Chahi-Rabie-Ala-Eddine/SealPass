import React, { Component } from "react";
import file_icon from "../assets/images/file_icon.png";
import share_link from "../assets/images/link.png";
import "../styles/cloud_page_component_style.css";

export default class cloudFileComponent extends Component {
  //TODO share button action
  render() {
    return (
      <div className={"FileBox"}>
        <span className={"iconShareLine"}>
          <img src={file_icon} alt={file_icon} className={"fileIcon"} />
          <button className={"shareButton"}>
            <img src={share_link} alt={share_link} className={"shareIcon"} />
          </button>
        </span>
        <div className={"nameDateSize"}>
          <h3>{this.props.fileInfo.name}</h3>
          <h5>{this.props.fileInfo.date}</h5>
          <h6>{this.props.fileInfo.size}</h6>
        </div>
      </div>
    );
  }
}
