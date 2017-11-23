import React, { Component } from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./Components/Home/Home.js"
import About from "./Components/About/About.js"
import Projects from "./Components/Projects/Projects.js"
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
