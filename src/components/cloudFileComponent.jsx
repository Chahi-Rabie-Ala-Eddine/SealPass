import React, { Component } from "react";
import file_icon from "../assets/images/file_icon.png";
import three_dots_fix from "../assets/images/3_black_dots_icon.png";
import downloadIcon from "../assets/images/cloud-download-2.png";
import "../styles/cloud_page_component_style.css";

export default class cloudFileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isVisible: false,
    };
    this.handleHiddenSwitch = this.handleHiddenSwitch.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
    this.handleFileDownload = this.handleFileDownload.bind(this);
  }

  handleFileDownload() {
    //TODO AJAX
    console.log("downloading file");
  }

  handleFileDelete() {
    //TODO AJAX
    console.log("deleted file");
  }

  handleHiddenSwitch() {
    if (this.state.isVisible) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: true });
    }
  }

  render() {
    return (
      <section className={"FileBox"}>
        <span className={"iconShareLine"}>
          <img src={file_icon} alt={file_icon} className={"fileIcon"} />
          <button className={"shareButton"} onClick={this.handleHiddenSwitch}>
            <img
              src={three_dots_fix}
              alt={three_dots_fix}
              className={"actionsIcon"}
            />
          </button>
          <div
            className={
              this.state.isVisible ? "dropDownMenu" : "dropDownMenu_hidden"
            }
          >
            <button
              className={"fileDownloadButton"}
              onClick={this.handleFileDownload}
            >
              <img
                src={downloadIcon}
                alt={downloadIcon}
                className={"downloadIcon"}
              />
            </button>
            <button
              className={"fileDeleteButton"}
              onClick={this.handleFileDelete}
            >
              Delete
            </button>
          </div>
        </span>
        <div className={"nameDateSize"}>
          <h3>{this.props.fileInfo.name}</h3>
          <h5>{this.props.fileInfo.date}</h5>
          <h6>{this.props.fileInfo.size}</h6>
        </div>
      </section>
    );
  }
}
