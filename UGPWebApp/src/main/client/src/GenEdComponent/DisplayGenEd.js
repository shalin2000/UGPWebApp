import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic01 from "../TitleScreenComponent/images/pic01.jpg"
import Header from '../Header';
import Footer from '../Footer';
import '../DisplayDept.css';

class DisplayGenEd extends Component {

    // when component mounts, it will move the screen to top
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className='App'>
                < Header /> 

                <div className="secHeader"><h2>General Education Core</h2></div>
                <br/>

                {/* Displays the 6 different gen eds cateogry that uic offers and calls the displaygenEdCourse component and sends props to know which item was clicked */}
                <div className="box alt container">
                    {/* link for Analyzing the Natural World */}
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'ANW' }}} className="image icon solid fa-seedling"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('ANW'))}</Link>
                        <div className="content">
                            <h3>Analyzing the Natural World</h3>
                        </div>
                    </section>
                    {/* link for Understanding the Individual and Society */}
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UIS' }}} className="image icon solid fa-users"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('UIS'))}</Link>
                        <div className="content">
                            <h3>Understanding the Individual and Society</h3>
                        </div>
                    </section>
                    {/* link for Understanding the Past */}
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UP' }}} className="image icon solid fa-history"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('UP'))}</Link>
                        <div className="content">
                            <h3>Understanding the Past</h3>
                        </div>
                    </section>
                    {/* link for Understanding the Creative Arts */}
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UCA' }}} className="image icon solid fa-palette"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('UCA'))}</Link>
                        <div className="content">
                            <h3>Understanding the Creative Arts</h3>
                        </div>
                    </section>
                    {/* link for Exploring World Cultures */}
                    <section className="feature left">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'EWC' }}} className="image icon solid fa-globe"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('EWC'))}</Link>
                        <div className="content">
                            <h3>Exploring World Cultures</h3>
                        </div>
                    </section>
                    {/* link for Understanding U.S. Society */}
                    <section className="feature right">
                        <Link to={{pathname: "/displayGenEdCourses", state: { linkState: 'UUS' }}} className="image icon solid fa-flag-usa"><img src={pic01} alt="pic01" /> {localStorage.setItem('row', JSON.stringify('UUS'))}</Link>
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
