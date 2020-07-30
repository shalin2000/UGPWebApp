import React, { Component } from 'react';
import './DisplayDept.css';
import ListCourse from './ListCourse';
import Header from './Header';
import Footer from './Footer';

class DisplayCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myData: [],
            testing: [],
          };
    }

      // Sets the data from csv file to myData state when start
    componentDidMount() {
        window.scrollTo(0, 0);        
        var retrievedObject = localStorage.getItem('chosenCourse');
        // console.log(JSON.parse(retrievedObject))
        this.setState({myData: JSON.parse(retrievedObject)})
    }

    render (){
        return(
            <div className='App'>
            < Header />

            <div className="secHeader">
                {/* using the props sent by the ImportCsvFile from Link in order to send the new props to ListCourse */}
                <h2> {this.state.myData.CRS_SUBJ_CD} - {this.state.myData.CRS_SUBJ_DESC}</h2>
            </div>
            <div className='Table'>
                <ListCourse dept={this.state.myData}/>
            </div>
                
            < Footer />

            </div>
        )
    };
}

export default DisplayCourse;
