import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic01 from "../TitleScreenComponent/images/pic01.jpg"
import pic02 from "../TitleScreenComponent/images/pic02.jpg"
import pic03 from "../TitleScreenComponent/images/pic03.jpg"
import Header from '../Header';
import Footer from '../Footer';
import '../DisplayDept.css';
import ListGenEdCourses from './ListGenEdCourses'
import ScrollUpButton from "react-scroll-up-button";

class DisplayGenEd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenGenEd: '',
          };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({chosenGenEd: this.props.location.state.linkState})
    }

    render(){

        let genCoursesTitle = ''

        // if else statesments that will be excusted depending on what the user has chosen as their gen ed
        if (this.state.chosenGenEd === "ANW") {
            genCoursesTitle = 'Analyzing the Natural World'
        }
        else if (this.state.chosenGenEd === "UIS") {
            genCoursesTitle = 'Understanding the Individual and Society'
        }
        else if (this.state.chosenGenEd === "UP") {
            genCoursesTitle = 'Understanding the Past'
        }
        else if (this.state.chosenGenEd === "UCA") {
            genCoursesTitle = 'Understanding the Creative Arts'
        }
        else if (this.state.chosenGenEd === "EWC") {
            genCoursesTitle = 'Exploring World Cultures'
        }
        else if (this.state.chosenGenEd === "UUS") {
            genCoursesTitle = 'Understanding U.S. Society'
        }

        return(
            <div className='App'>
                <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
                < Header /> 

                <div className="secHeader"><h2>{genCoursesTitle}</h2></div>
                <div className='Table'>
                < ListGenEdCourses chosenGenEd={this.state.chosenGenEd}/>
                </div>
                

                < Footer />

            </div>
        )
    }
}

export default DisplayGenEd