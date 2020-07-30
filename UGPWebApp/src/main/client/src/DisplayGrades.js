import React, { Component } from 'react';
import './DisplayDept.css';
import ListGrades from './ListGrades'
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
        // var retrievedObject = localStorage.getItem('row');
        // this.setState({myData: JSON.parse(retrievedObject)})
        this.setState({myData: this.props.location.state.linkState})
    }

    render (){
        return(
            <div className='App'>
                < Header />

                <div className="secHeader">
                <h2> {this.state.myData.CRS_SUBJ_CD} {this.state.myData.CRS_NBR} - {this.state.myData.CRS_TITLE} </h2>
                <h2>{this.state.myData.name1}</h2>
                </div>
                {/* calls listGrade with the prop that was sent from listProf */}
                <ListGrades ProfInfo={this.state.myData}/>
                
                < Footer />
                
            </div>
        )
    };
}

export default DisplayGrades;
