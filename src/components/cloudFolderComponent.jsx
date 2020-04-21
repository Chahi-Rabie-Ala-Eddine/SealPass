import React, { Component } from "react";
import folder_red from "../assets/images/folder_red.png";
import three_dots_fix from "../assets/images/3_black_dots_icon.png";
import CloudFileComponent from "./cloudFileComponent";
import "../styles/cloud_page_component_style.css";
import Modal from "react-modal";

export default class cloudFolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copySharelinkSuccess: "",
      showModal: false,
      isVisible: false,
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleHiddenSwitch = this.handleHiddenSwitch.bind(this);
    this.handleFolderDelete = this.handleFolderDelete.bind(this);
  }

  handleModal() {
    if (this.state.showModal) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }
  }

  handleFolderDelete() {
    console.log("deleted folder");
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
      <section className={"FolderBox"}>
        <span className={"iconShareLine"}>
          <img src={folder_red} alt={folder_red} className={"folderIcon"} />
          <div className={"actionsWrapper"}>
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
              <button className={"openFolderButton"} onClick={this.handleModal}>
                Open
              </button>
              <Modal
                isOpen={this.state.showModal}
                contentLabel={"onRequestClose"}
                onRequestClose={this.handleModal}
                className={"folderModal"}
                overlayClassName={"Overlay"}
              >
                <section className={"folderContentModal"}>
                  <h2>{this.props.folderInfo.name}</h2>
                  <div className={"inFolderFilesGrid"}>
                    {this.props.folderInfo.files.map((file, i) => (
                      <CloudFileComponent fileInfo={file} key={i} />
                    ))}
                  </div>
                  <button
                    className={"overlayButton"}
                    onClick={this.handleModal}
                  >
                    Close
                  </button>
                </section>
              </Modal>
              <button
                className={"folderDeleteButton"}
                onClick={this.handleFolderDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </span>
        <div className={"nameDate"}>
          <h3>{this.props.folderInfo.name}</h3>
          <h5>{this.props.folderInfo.date}</h5>
        </div>
      </section>
    );
  }
}
