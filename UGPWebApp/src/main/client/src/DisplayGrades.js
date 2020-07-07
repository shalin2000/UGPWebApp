import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayDept.css';
import ListGrades from './ListGrades'
import Logo from './logoImage.png'
import Header from './Header';
import Footer from './Footer';

class DisplayGrades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myData: [],
          };
    }

    // Sets the data from props that was sent from listCourse to myData state when start
    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({myData: this.props.location.state.linkState})
    }

    render (){
        return(
            <div className='App'>
                < Header />

                <div className="secHeader">
                <h2> {this.state.myData.CRS_SUBJ_CD} {this.state.myData.CRS_NBR} - {this.state.myData.CRS_TITLE} </h2>
                <h2>{this.state.myData.name1}</h2>
                <p><ListGrades ProfInfo={this.state.myData}/></p>

                </div>

                < Footer />
                
            </div>
        )
    };
}

export default DisplayGrades;
