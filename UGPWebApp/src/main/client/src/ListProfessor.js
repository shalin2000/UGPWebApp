import React, { Component } from 'react';

import './DisplayDept.css';
import * as d3 from 'd3';
import data from './CSVData/10Year.csv';
import { Link } from "react-router-dom";

class ListProfessor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
      letterArrA: []
    };
  }
  
  // Sets the data from csv file to myData state when start
  componentDidMount() {
    d3.csv(data).then(data => {
        this.setState({ myData: data });
      });
  }
  
  // this calculates the total letters from all semester 
  calculateGPA(data){
    return (((4*parseInt(data.A)) + (3*parseInt(data.B)) + (2*parseInt(data.C)) + (parseInt(data.D))) / (parseInt(data.A) + parseInt(data.B) + parseInt(data.C) + parseInt(data.D) + parseInt(data.F))).toFixed(2)
  }

  render() {    

    // filters the array so the new array contains only the professor that match the CRS_TITLE that was passed in as the prop (TITLE) from DisplayProfessor
    const printArr = this.state.myData.filter(x => x.CRS_NBR === (this.props.profInfo.CRS_NBR) && x.CRS_SUBJ_CD === (this.props.profInfo.CRS_SUBJ_CD) && 
                                              x.CRS_TITLE === (this.props.profInfo.CRS_TITLE)).sort((a,b) => a.name1 > b.name1 ? 1 : -1); 
    
    // adds all the A,B,C,D,F of the same prof and removes the duplicates
    const res = printArr.reduce((r,c) => { 
      (!r[c.name1])?r[c.name1] = c : r[c.name1] = {...r[c.name1], A : parseInt(c.A) + parseInt(r[c.name1].A) , 
        B : parseInt(c.B) + parseInt(r[c.name1].B), C : parseInt(c.C) + parseInt(r[c.name1].C), D : parseInt(c.D) + parseInt(r[c.name1].D), F : parseInt(c.F) + parseInt(r[c.name1].F)} ; 
        return r
      } , {})

    // map the array which then returns the course number and course title
    const displayProfArr = <div className="row" 
                            style={{
                              margin: '30px', 
                              justifyContent: 'center'
                              }}
                           >
                              {Object.values(res).sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => (
                                  <div className="card"
                                    style={{
                                      width: '14rem',
                                      height: '14rem',
                                      margin: '16px',
                                      padding: '16px',
                                      borderRadius: '25%',  
                                      background: this.calculateGPA(data) >= 3.50 ? 'rgba(47, 238, 17, 0.2)' :
                                      (this.calculateGPA(data) >= 3.00 ? 'rgba(33, 182, 168, 0.2)' :
                                      (this.calculateGPA(data) >= 2.50 ? 'rgba(54, 162, 235, 0.2)' :
                                      (this.calculateGPA(data) >= 2.00 ? 'rgba(255, 206, 86, 0.2)' :
                                      (this.calculateGPA(data) >= 0.00 ? 'rgba(223, 21, 21, 0.2)' :
                                      'rgba(128, 128, 128, 0.2)'))))    
                                    }}
                                  >
                                    <Link className="card-body" 
                                      key={idx} to={{pathname: "/displayGrades", state: { linkState: data }}}
                                      onClick={this.linking}
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <h3 style={{margin: 0, color: '#5b5b5b'}}>{data.name1}
                                      <hr/>
                                      <i>GPA: {this.calculateGPA(data) > 0.00 ? this.calculateGPA(data) : 'N/A' }</i>
                                      </h3> 
                                    </Link>
                                  </div>
                              ))}
                            </div>

    return (
      <div >
        {displayProfArr}
      </div>
    );   
  }
};

export default ListProfessor;