import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic01 from "../TitleScreenComponent/images/pic01.jpg"
import pic02 from "../TitleScreenComponent/images/pic02.jpg"
import pic03 from "../TitleScreenComponent/images/pic03.jpg"
import Header from '../Header';
import Footer from '../Footer';
import '../DisplayDept.css';
// import ScrollUpButton from "react-scroll-up-button";

class DisplayGenEd extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className='App'>
                {/* <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/> */}
                < Header /> 

                <div className="secHeader"><h2>General Education Core</h2></div>
                <br/>

                <div className="box alt container">
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'ANW' }}} className="image icon solid fa-seedling"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Analyzing the Natural World</h3>
                        </div>
                    </section>
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UIS' }}} className="image icon solid fa-users"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Understanding the Individual and Society</h3>
                        </div>
                    </section>
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UP' }}} className="image icon solid fa-history"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Understanding the Past</h3>
                        </div>
                    </section>
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UCA' }}} className="image icon solid fa-palette"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Understanding the Creative Arts</h3>
                        </div>
                    </section>
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'EWC' }}} className="image icon solid fa-globe"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Exploring World Cultures</h3>
                        </div>
                    </section>
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UUS' }}} className="image icon solid fa-flag-usa"><img src={pic01} alt="pic01" /></Link>
                        <div className="content">
                            <h3>Understanding U.S. Society</h3>
                        </div>
                    </section>
                </div>

                < Footer />

            </div>
        )
    }
}

export default DisplayGenEd
