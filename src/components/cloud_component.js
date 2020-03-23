import React, { Component } from 'react';

import Add_file_component from './add_file'

import Delete_file_component from './delete_file_component'

import '../styles/cloud_component.css'

export default class cloud_component extends Component {
    render() {
        return (
            <main>
              <div className="cloud_block">
                <h1>Cloud</h1>
                <Add_file_component />
                  <hr className="hr_line"/>
                <Delete_file_component />
              </div>
              <div>
              </div>
            </main>
        )
    }
}
