import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../DisplayDept.css';
import ListGenEdCourses from './ListGenEdCourses'

class DisplayGenEd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenGenEd: '',
          };
    }

    // when component mounts, it scrolls to top and sets the state chosenGenEd to the one that was passed from DisplayGenEd
    componentDidMount() {
        window.scrollTo(0, 0);
        var retrievedObject = localStorage.getItem('genEd');
        this.setState({chosenGenEd: JSON.parse(retrievedObject)})
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
                < Header /> 

                <div className="secHeader"><h2>{genCoursesTitle}</h2></div>
                <div className='Table'>
                    < ListGenEdCourses chosenGenEd={this.state.chosenGenEd} />
                </div>

                < Footer />
            </div>
        )
    }
}

export default DisplayGenEd