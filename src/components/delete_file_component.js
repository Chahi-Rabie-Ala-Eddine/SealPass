import React, {Component} from 'react';

import '../styles/cloud_component.css'


class Delete_file_component extends Component{

  constructor(props){
    super(props);
    this.state = { file_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    alert(this.state.filename +"has been deleting");
    event.preventDefault();
  }

  render(){
    return(
      <form className="form_delete_file" onSubmit={this.handleSubmit}>
        <div>
          <h2>Delete File</h2>
          <select className="select_file_to_delete">
								<option value="">-------Choose the file-------</option>
          </select><br />
          <div >
            <button type="submit" value="Submit" className="btn_delete_sub" > Delete</button>
            <button type="reset" name="reset" value="Cancel" className="btn_delete_cancel"> Cancel </button>
          </div>
        </div>
      </form>
    )
  }
}


export default Delete_file_component
