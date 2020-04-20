import React, { Component } from "react";
import CloudFileComponent from "./cloudFileComponent";
import CloudFolderComponent from "./cloudFolderComponent";
import NewFolderComponent from "./newFolderComponent";
import FileUploadComponent from "./file_upload_component";

import "../styles/cloud_page_component_style.css";
/*
 * Ici les informations des fichiers et des dossiers sont des objets, ces objets sont ensuite envoyés
 * individuellement envoyé a leur component respectif.
 * */
export default class cloud_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [
        //TODO get objects from requests (ajax)
        {
          name: "Folder1",
          date: "10-04-2020",
          sharelink: "dfqjbgdfbkbgdfk",
          files: [
            {
              name: "File1",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File2",
              size: "35ko",
              date: "10-04-2020",
              sharelink: "blopblpoblpo",
            },
            {
              name: "File3",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File5",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File4",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
          ],
        },
        {
          name: "Folder2",
          date: "10-04-2020",
          sharelink: "dfqjbgdfbkbgdfk",
          files: [
            {
              name: "File1",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File2",
              size: "35ko",
              date: "10-04-2020",
              sharelink: "blopblpoblpo",
            },
            {
              name: "File3",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File5",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File4",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
          ],},
        {
          name: "Folder3",
          date: "10-04-2020",
          sharelink: "dfqjbgdfbkbgdfk",
          files: [
            {
              name: "File1",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File2",
              size: "35ko",
              date: "10-04-2020",
              sharelink: "blopblpoblpo",
            },
            {
              name: "File3",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File5",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File4",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
          ],
        },
        {
          name: "Folder4",
          date: "10-04-2020",
          sharelink: "dfqjbgdfbkbgdfk",
          files: [
            {
              name: "File1",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File2",
              size: "35ko",
              date: "10-04-2020",
              sharelink: "blopblpoblpo",
            },
            {
              name: "File3",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File5",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File4",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
          ],
        },
        {
          name: "Folder5",
          date: "10-04-2020",
          sharelink: "dfqjbgdfbkbgdfk",
          files: [
            {
              name: "File1",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File2",
              size: "35ko",
              date: "10-04-2020",
              sharelink: "blopblpoblpo",
            },
            {
              name: "File3",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File5",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
            {
              name: "File4",
              size: "20ko",
              date: "10-04-2020",
              sharelink: "bloblbopbl",
            },
          ],
        },
      ],
      files: [
        {
          name: "File1",
          size: "20ko",
          date: "10-04-2020",
          sharelink: "bloblbopbl",
        },
        {
          name: "File2",
          size: "35ko",
          date: "10-04-2020",
          sharelink: "blopblpoblpo",
        },
        {
          name: "File3",
          size: "20ko",
          date: "10-04-2020",
          sharelink: "bloblbopbl",
        },
        {
          name: "File4",
          size: "20ko",
          date: "10-04-2020",
          sharelink: "bloblbopbl",
        },
        {
          name: "File5",
          size: "20ko",
          date: "10-04-2020",
          sharelink: "bloblbopbl",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>My Cloud</h1>
        <hr className={"hr_line"} />
        <div>
          <h2>Folders</h2>
          <div className="cloudFolderComponentContainer">
            {this.state.folders.map((folder, i) => (
              <CloudFolderComponent folderInfo={folder} key={i} />
            ))}
            <NewFolderComponent />
          </div>
        </div>
        <div>
          <h2>Files</h2>
          <div className="cloudFileComponentContainer">
            {this.state.files.map((file, i) => (
              <CloudFileComponent fileInfo={file} key={i} />
            ))}
            <FileUploadComponent />
          </div>
        </div>
      </div>
    );
  }
}
