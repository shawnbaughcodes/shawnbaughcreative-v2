import React from 'react';
import "./About.css";
import {Link} from 'react-router-dom'
class About extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="" id="aboutContainer">
                <div className="">
                    <div className="">
                        <div className="" id="aboutText">
                            <h1>about.</h1>
                            <h2>My name is Shawn Baugh II and I am an experienced Web Application Developer with a demonstrated history of working with many technologies. Skilled in Python, JavaScript, Java, and C# languages. A recent graduate from Coding Dojo Dallas with an interest in web and mobile app development. I enjoy creating solutions to make a client’s life easier. I am interested in learning more about a position with a company as a web or software developer.</h2>
                        </div>
                        <div className="" id="aboutNav">
                            <div id="projectsAboutNav">
                                <h2><Link to="/projects">projects.</Link></h2>
                            </div>
                            <div id="homeAboutNav">
                                <h2><Link to="/">home.</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
