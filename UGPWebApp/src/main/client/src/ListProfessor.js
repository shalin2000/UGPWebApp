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
    };
  }
  
  // Sets the data from csv file to myData state when start
  componentDidMount() {
    d3.csv(data).then(data => {
        this.setState({ myData: data });
      });
  }
  
  // Removes the duplicate value in the object
  removeDup(data, key) {
    return [
      ...new Map(
        data.map(x=>[key(x), x])
      ).values(),
    ];
  }

  render() {    

    // filters the array so the new array contains only the professor that match the CRS_TITLE that was passed in as the prop (TITLE) from DisplayProfessor
    const printArr = this.state.myData.filter(x => x.CRS_NBR === (this.props.profInfo.CRS_NBR) && x.CRS_SUBJ_CD === (this.props.profInfo.CRS_SUBJ_CD)); 

    // removes dup entires that have the same name1 and store it in noDup array
    const noDupArr = this.removeDup(printArr, x => x.name1);

    // map the array which then returns the course number and course title
    const displayProfArr = <div className="row" 
                            style={{
                              margin: '30px', 
                              justifyContent: 'center'
                              }}
                           >
                              {noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => (
                                  <div className="card"
                                    style={{
                                      width: '14rem',
                                      height: '14rem',
                                      margin: '16px',
                                      padding: '16px',
                                      borderRadius: '25%',      
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
                                      <h3 style={{margin: 0, color: '#5b5b5b'}}>{data.name1}</h3> 
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