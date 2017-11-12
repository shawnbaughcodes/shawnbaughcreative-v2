import React, { Component } from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Components/Home/Home.js"
import About from "./Components/About/About.js"
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
