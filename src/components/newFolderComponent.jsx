import React, { Component } from "react";
import "../styles/cloud_page_component_style.css";
import Modal from "react-modal";

export default class newFolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      folderName: null,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUploadRequest = this.handleUploadRequest.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.setState({folderName: event.target.value})
  }

  handleUploadRequest() {
    if(this.state.folderName != null) {
      console.log("creating new folder");
      //TODO AJAX
      this.handleCloseModal();
    }
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <section className={"aroundPlusButton"}>
        <button className={"plusButton"} onClick={this.handleOpenModal}>
          <h1>+</h1>
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel={"onRequestClose"}
          onRequestClose={this.handleCloseModal}
          className={"Modal"}
          overlayClassName={"Overlay"}
        >
          <section className={"uploadModal"}>
            <h2>Create new folder</h2>
            <input type={"text"} className={"newFolderNameText"} defaultValue={""} onChange={this.handleNameChange}/>
            <div className={"buttonRow"}>
              <button
                className={"createFolderButton"}
                onClick={this.handleUploadRequest}
                value={"Submit"}
              >
                Create
              </button>
              <button
                className={"overlayButton"}
                onClick={this.handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </section>
        </Modal>
      </section>
    );
  }
}
