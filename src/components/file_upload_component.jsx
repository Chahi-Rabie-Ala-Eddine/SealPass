import React, { Component } from "react";
import Modal from "react-modal";
import Dropzone from "react-dropzone";
import "../styles/cloud_page_component_style.css";

export default class file_upload_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      content: "Drag'n Drop file here, or click to select file",
      selectedFile: null,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUploadFetch = this.handleUploadFetch.bind(this);
    this.handleUploadRedirect = this.handleUploadRedirect.bind(this);
    this.changeContentName = this.changeContentName.bind(this);
  }

  handleUploadRedirect() {
    //TODO
    if (this.state.selectedFile != null) {
      console.log("redirecting to -> actualpath");
      this.handleCloseModal();
    }
  }
  changeContentName() {
    this.setState({ content: this.state.selectedFile[0].name });
  }

  handleUploadFetch(acceptedFile) {
    this.setState({ selectedFile: acceptedFile });
    this.changeContentName();
    console.log(this.state.selectedFile);
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
            <h2>Upload File</h2>
            <Dropzone
              onDrop={(acceptedFiles) => this.handleUploadFetch(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <section className={"dragNDropArea"}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p> {this.state.content}</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className={"buttonRow"}>
              <button
                className={"uploadFileButton"}
                onClick={this.handleUploadRedirect}
              >
                Upload
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
