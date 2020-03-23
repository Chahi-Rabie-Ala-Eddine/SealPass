import React, {Component} from 'react';

import '../styles/cloud_component.css'

class Add_file_component extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  // handleSubmit() {
  //   alert('the file has been successfully added' + this.file_name.);
  // }

  handleSubmit(event) {
    alert(
      `the file has been successfully added: ${
        this.fileInput.current.files[0].name
      }`
    );
    event.preventDefault();
  }

  render(){
    return (

        <form className="form_upload" onSubmit={this.handleSubmit}>
          <div className="input_block">
            <h2>Upload file</h2>
              <input className="input_upload" type="file" ref={this.fileInput} />
          </div>
          <div className="submit_block">
            <button type="submit" value="Submit" className="btn_upload"> Upload file </button>
          </div>
        </form>
    )
  }
}

export default Add_file_component
