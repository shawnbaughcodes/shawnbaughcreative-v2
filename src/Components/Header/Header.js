import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="" id="nav-bar">
                <Link to="/about">about.</Link>
                <Link to="/"> home. </Link>
                <Link to="/projects">projects.</Link>
            </div>
        )
    }
}
export default Header;
