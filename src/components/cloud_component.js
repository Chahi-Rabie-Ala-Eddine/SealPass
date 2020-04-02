import React, { Component } from "react";
import CloudFileComponent from "./cloudFileComponent";
import CloudFolderComponent from "./cloudFolderComponent";
import NewFolderComponent from "./newFolderComponent";
import FileUploadComponent from "./file_upload_component"

import "../styles/cloud_page_component_style.css";

export default class cloud_component extends Component {
  render() {
    return (
      <div>
        <h1>My Cloud</h1>
          <hr className={"hr_line"}/>
        <div>
          <h2>Folders</h2>
          <div className="cloudFolderComponentContainer">
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <CloudFolderComponent />
            <NewFolderComponent/>
          </div>
        </div>
        <div>
          <h2>Files</h2>
          <div className="cloudFileComponentContainer">
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <CloudFileComponent />
            <FileUploadComponent/>
          </div>
        </div>
      </div>
    );
  }
}
