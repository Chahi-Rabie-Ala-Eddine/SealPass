import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CloudComponent from "./components/cloud_component";
import Modal from "react-modal";

//TODO remove //dev-only//


Modal.setAppElement("#root");

ReactDOM.render(<CloudComponent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
