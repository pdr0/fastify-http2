import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

const wrapper = document.getElementById("http2-poc");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
