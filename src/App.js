import React, { Component } from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Components/Home/Home.js"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Home />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
