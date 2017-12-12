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
            <div className="" id="home">
                <div className="" id="image">
                    <div className="container is-desktop" id="header">
                        <Header />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
