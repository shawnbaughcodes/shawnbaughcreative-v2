import React from 'react';
import "./Home.css";
import {Route, Link} from 'react-router-dom'
import Header from '../Header/Header.js'
import About from "../About/About.js"
class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div id="home">
                <div className="uk-container-center" id="image">
                    <div id="header">
                        <Header />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
