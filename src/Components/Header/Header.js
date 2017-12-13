import React from 'react';
import "./Header.css";
import "../../index.css";
import About from "../About/About.js"
import {Route, Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <div className="level is-hidden-mobile" id="nav-bar">
                    <Link className="level-item has-text-centered" to="/about">about. </Link>
                    <Link className="level-item has-text-centered" to="/"> sb2.</Link>
                    <Link className="level-item has-text-centered" to="/projects"> projects.</Link>
                </div>
                <div className="is-hidden-tablet">
                    <div id="mobileHeaderNav">
                        <Link className="level-item has-text-centered" to="/about">about. </Link>
                        <Link className="level-item has-text-centered" to="/"> sb2.</Link>
                        <Link className="level-item has-text-centered" to="/projects"> projects.</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
