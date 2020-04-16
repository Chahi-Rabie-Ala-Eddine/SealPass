import React, { Component } from "react";
import Modal from "react-modal";
import "../styles/cloud_page_component_style.css";

export default class file_upload_component extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal: false,
      selectedFile: null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUploadFetch = this.handleUploadFetch.bind(this);
    this.handleUploadRequest = this.handleUploadRequest(this);
  }

  handleUploadRequest(){//TODO AJAX
    console.log("uploading file");
    this.handleCloseModal();
  }

  handleUploadFetch(event){
    this.setState({selectedFile:event.target.files[0]})
  }

  handleCloseModal(){
    this.setState({showModal: false});
  }

  handleOpenModal(){
    this.setState({showModal: true});
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
            <input
              className={"fileInput"}
              type={"file"}
              name={"file"}
              onChange={this.handleUploadFetch}
            />
            <div className={"buttonRow"}>
              <button
                className={"uploadFileButton"}
                onClick={this.handleUploadRequest}
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
