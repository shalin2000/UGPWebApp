import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './DisplayDept.css';

import * as d3 from 'd3';
import data from './CSVData/10Year.csv';
import avatar from './img_avatar3.png';
import pic01 from "./TitleScreenComponent/images/pic01.jpg"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

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

    console.log(printArr)
    // removes dup entires that have the same name1 and store it in noDup array
    const noDupArr = this.removeDup(printArr, x => x.name1);

    // map the array which then returns the course number and course title
    const displayProfArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => {
      return <div className="Table1">
      <div className="box alt container" style={{border: "1px solid whitesmoke", width: "50%", float: "left"}}>
          <section className="feature left">
          <Link to={{pathname: "/displayGrades", state: { linkState: data }}} key={idx} className="image icon solid fa-user"><img src={pic01} alt="pic01"/></Link>
          <div className="content">
              <h3>{data.name1}</h3>
          </div>
          </section>   
      </div>
      </div>
      
    });
    
    return (
       <div>
        <div>{displayProfArr}</div>
       </div>
       
    );

  }

};

export default ListProfessor;