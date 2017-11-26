import React from 'react';
import "./Projects.css";
import {Link} from 'react-router-dom';
import { VideoPlayer } from 'react-video-players';
class Projects extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="" id="projectsContainer">
                <div className="" id="projectsScroll">
                    <h1>projects.</h1>
                        <div>
                            <h2>Text about my projects...</h2>
                        </div>
                        <div id="project">
                            <h2></h2>
                            <div id="projectImage">
                                <img src={require('./img/ideas_bg.png')} />
                            </div>
                        </div>
                </div>
                <div className="" id="aboutNav">
                    <div id="projectsAboutNav">
                        <h2><Link to="/about">about.</Link></h2>
                    </div>
                    <div id="homeAboutNav">
                        <h2><Link to="/">home.</Link></h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;
