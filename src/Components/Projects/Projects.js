import React from 'react';
import "./Projects.css";
import "../../index.css"
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { VideoPlayer } from 'react-video-players';
class Projects extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div id="projectsContainer">
                <div className="is-hidden-mobile">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        <div className="" id="projectsScroll">
                            <div id="projectsHeading">
                                <h1>projects.</h1>
                                <h2>I have enjoyed working in different frameworks and languages over the course my career. These projects below display just a few of the many languages I have had the privelege of learning and working with. If you would like to see all of my projects and learning experience, I would encourage you to click through to see my <Link to="https://github.com/shawnbaughcodes" target="_blank">GitHub repositories</Link>.</h2>
                            </div>
                                <div id="project">
                                    <h2>Play</h2>
                                    <h3>Play is the ultimate app for pickup games in many sports. Initially built in python and currently building the mobile app for Android and iPhone using React Native, Play is where you can schedule games with any person or team you would like. Want to make a team and play your friends? You can do that with Play can do it. Want to get better at your sport by playing better players? You can do that with Play can do that. To view the code <Link to="https://github.com/shawnbaughcodes/play" target="_blank">see my GitHub</Link>.</h3>
                                    <div id="projectImage">
                                        <img src={require('./img/Play.png')} />
                                    </div>
                                </div>
                                <div id="project">
                                    <h2>Ideas</h2>
                                    <h3>Ideas is a Ruby on Rails project I created during my time at Coding Dojo. It uses the Materialize CSS framework and posts any idea that you decide to share. To view the code <Link to="https://github.com/shawnbaughcodes/ideas" target="_blank">see my GitHub</Link>.</h3>
                                    <div id="projectImage">
                                        <img src={require('./img/ideas.png')} />
                                    </div>
                                </div>
                                <div id="project">
                                    <h2>Rad Music Official</h2>
                                    <h3>Rad Music is booking and promotoions website that I created for a friend. This was my first project and uses the Bootstrap CSS framework. This site is on a Node and express server and published through AWS EC2 using NGINIX. To view the code <Link to="https://github.com/shawnbaughcodes/radmusicofficial" target="_blank">see my GitHub</Link>. Alternatively you may click the image to see the site hosted on my AWS EC2 server.</h3>
                                    <div id="projectImage">
                                        <Link to="http://www.radmusicofficial.com" target="_blank"><img src={require('./img/radmusicscreenshot1.png')} /></Link>
                                    </div>
                                </div>
                                <div id="project">
                                    <h2>Digs Official Music Site</h2>
                                    <h3>Digs is a Hip-Hop music duo that I built a simple webpage for. This site uses the Bootstrap CSS framework. To view the code <Link to="https://github.com/shawnbaughcodes/digssite" target="_blank">see my GitHub</Link>.</h3>
                                    <div id="projectImage">
                                        <img src={require('./img/digsscreenshot.png')} />
                                    </div>
                                </div>
                        </div>
                    </ReactCSSTransitionGroup>
                    <div className="" id="aboutNav">
                        <div id="projectsAboutNav">
                            <h2><Link to="/about">about.</Link></h2>
                        </div>
                        <div id="homeAboutNav">
                            <h2><Link to="/">sb2.</Link></h2>
                        </div>
                    </div>
                </div>
                <div className="is-hidden-tablet">
                    <div id="mobileProjectsHeading">
                        <div id="mobileAboutNav">
                            <h2><Link to="/about">about.</Link></h2>
                            <h2><Link to="/">sb2.</Link></h2>
                        </div>
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}>
                            <div id="mobileAboutText">
                                <h1>projects.</h1>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                    <div id="mobileProjectsScroll">
                        <h2>I have enjoyed working in different frameworks and labguages over the course my career. These projects below display just a few of the many languages I have had the privelege of learning and working with. If you would like to see all of my projects and learning experience, I would encourage you to see my <Link to="https://github.com/shawnbaughcodes" target="_blank">GitHub repositories</Link>.</h2>
                        <div id="mobileProject">
                            <h2>Play</h2>
                            <h3>Play is the ultimate app for pickup games in many sports. Initially built in python and currently building the mobile app for Android and iPhone using React Native, Play is where you can schedule games with any person or team you would like. Want to make a team and play your friends? You can do that with Play can do it. Want to get better at your sport by playing better players? You can do that with Play can do that. To view the code <Link to="https://github.com/shawnbaughcodes/play" target="_blank">see my GitHub</Link>.</h3>
                            <div id="mobileProjectImage">
                                <img src={require('./img/Play.png')} />
                            </div>
                        </div>
                        <div id="mobileProject">
                            <h2>Ideas</h2>
                            <h3>Ideas is a Ruby on Rails project I created during my time at Coding Dojo. It uses the Materialize CSS framework and posts any idea that you decide to share. To view the code <Link to="https://github.com/shawnbaughcodes/ideas" target="_blank">see my GitHub</Link>.</h3>
                            <div id="mobileProjectImage">
                                <img src={require('./img/ideas.png')} />
                            </div>
                        </div>
                        <div id="mobileProject">
                            <h2>Rad Music Official</h2>
                            <h3>Rad Music is booking and promotoions website that I created for a friend. This was my first project and uses the Bootstrap CSS framework. This site is on a Node and express server and published through AWS EC2 using NGINIX. To view the code <Link to="https://github.com/shawnbaughcodes/radmusicofficial" target="_blank">see my GitHub</Link>. Alternatively you may click the image to see the site hosted on my AWS EC2 server.</h3>
                            <div id="mobileProjectImage">
                                <Link to="http://www.radmusicofficial.com" target="_blank"><img src={require('./img/radmusicscreenshot1.png')} /></Link>
                            </div>
                        </div>
                        <div id="mobileProject">
                            <h2>Digs Official Music Site</h2>
                            <h3>Digs is a Hip-Hop music duo that I built a simple webpage for. This site uses the Bootstrap CSS framework. To view the code <Link to="https://github.com/shawnbaughcodes/digssite" target="_blank">see my GitHub</Link>.</h3>
                            <div id="mobileProjectImage">
                                <img src={require('./img/digsscreenshot.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;
