import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayDept.css';
import ListProfessor from './ListProfessor';
import Header from './Header';
import Footer from './Footer';

class DisplayProfessor extends Component {

    constructor(props) {
        super(props);
        this.state = {    
            myData: []
          };
    }

    // Sets the data from props that was sent from listCourse to myData state when start
    componentDidMount() {
        this.setState({myData: this.props.location.state.linkState})
    }

    render (){
        return(
            <div className='App'>
                < Header />

                <div className="secHeader">
                    {/* using the props sent by the ImportCsvFile from Link in order to send the new props to ListCourse */}
                    <h2>Instructors for {this.state.myData.CRS_SUBJ_CD} {this.state.myData.CRS_NBR} - {this.state.myData.CRS_TITLE} </h2>
                </div>
                    {/* <h1>{this.props.location.state.linkState.CRS_SUBJ_CD} {this.props.location.state.linkState.CRS_NBR} - {this.props.location.state.linkState.CRS_TITLE}</h1> */}
                    <p><ListProfessor profInfo={this.state.myData}/></p>
                
                < Footer />

            </div>
        )
    };
}

export default DisplayProfessor;
