import React, { Component } from 'react';

import './DisplayDept.css';
import * as d3 from 'd3';
import data from './CSVData/10Year.csv';
import pic01 from "./TitleScreenComponent/images/Investortools-SS-Site-solid-1px-darkblue@2x.png"
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
    // const displayProfArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => {
    //   return <div className="Table1">

    //   <div className="box alt container" style={{border: "1px solid whitesmoke", width: "50%", float: "left"}}>
    //       <section className="feature left">
    //       <Link to={{pathname: "/displayGrades", state: { linkState: data }}} key={idx} className="image icon solid fa-user"><img src={pic01} alt="pic01"/></Link>
    //       <div className="content">
    //           <h3>{data.name1}</h3>
    //       </div>
    //       </section>   
    //   </div>
    //   </div>
    // });

    // map the array which then returns the course number and course title
    // const displayProfArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => {
    //   return <div class="col-md-3 font-work-sans" style={{padding: "0px 0px 20px"}}>
    //             <div class="textOnImg">
    //               <Link to={{pathname: "/displayGrades", state: { linkState: data }}} key={idx}>
    //                 <img src={pic01} alt="pic01"/>
    //                 <h3 class="centered">{data.name1}</h3>
    //               </Link>
    //             </div>
    //         </div>
    // });

    // map the array which then returns the course number and course title
    // const displayProfArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => {
    //   return <div class="card card-custom mx-2 mb-3">
    //             <div class="textOnImg">
    //               <Link to={{pathname: "/displayGrades", state: { linkState: data }}} key={idx}>
    //                 <img src={pic01} alt="pic01"/>
    //                 <h3 class="centered">{data.name1}</h3>
    //               </Link>
    //             </div>
    //         </div>
    // });

    const displayProfArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1).map((data, idx) => {
      return <div class="card" style={{width: "18rem", maxHeight: "18rem"}}>
                <div class="card-body" style={{border: '1px red solid'}}>
                  <div className="textOnImg">
                    <Link to={{pathname: "/displayGrades", state: { linkState: data }}} key={idx}>
                      <img src={pic01} alt="pic01"/>
                      <h3 class="centered">{data.name1}</h3>
                    </Link>
                  </div>
                </div>
            </div>     

    });

    

    return (
      //  <div>
      //    <div class="row rowForCard font-work-sans">
      //       {displayProfArr}
      //     </div>
      //  </div>
      // <div class="container" >
        <div class="row mt-5 justify-content-center">
          {displayProfArr}
        </div>
      // </div>
      // <div class="card" style={{width: "18rem"}}>
      //   <div class="card-body">
      //     <h5 class="card-title">Special title treatment</h5>
      //     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      //     <a href="#" class="btn btn-primary">Go somewhere</a>
      //   </div>
      // </div>
    );
  }

};

export default ListProfessor;