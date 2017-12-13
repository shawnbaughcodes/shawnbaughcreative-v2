import React from 'react';
import "./Home.css";
import {Route, Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../Header/Header.js'
import About from "../About/About.js"
class Home extends React.Component{
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }

    render(){
        return(
            <div className="" id="home">
                <div className="" id="image">
                    <ReactCSSTransitionGroup
                        transitionName="fadehome"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        <div className="container is-desktop" id="header">
                            <Header />
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
export default Home;
