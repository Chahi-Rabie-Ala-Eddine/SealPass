import React, { Component } from "react";
import folder_red from "../assets/images/folder_red.png";
import share_link from "../assets/images/link.png";
import "../styles/cloud_page_component_style.css";

export default class cloudFolderComponent extends Component {
  //TODO share button action
  constructor(props) {
    super(props);
    this.state = { copySharelinkSuccess: "" };
  }

  render() {
    return (
      <div className={"FolderBox"}>
        <span className={"iconShareLine"}>
          <img src={folder_red} alt={folder_red} className={"folderIcon"} />
          <button className={"shareButton"}>
            <img src={share_link} alt={share_link} className={"shareIcon"} />
          </button>
        </span>
        <div className={"nameDate"}>
          <h3>{this.props.folderInfo.name}</h3>
          <h5>{this.props.folderInfo.date}</h5>
        </div>
      </div>
    );
  }
}
