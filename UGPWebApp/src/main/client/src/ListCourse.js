import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './DisplayDept.css';

import * as d3 from 'd3';
import data from './CSVData/3Year.csv';
import BootstrapTable from 'react-bootstrap-table-next';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class ListCourse extends Component {
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

  CellFormatter(cell, row) {
    return (
      <div>
        <Link to={{pathname: "/displayProfessor", state: { linkState: row }}}> 
            {cell}
        </Link>
      </div>
      );
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
    // filters the array so the new array contains only the courses that match the dept that was passed in as the prop (dept) from coursePage
    const printArr = this.state.myData.filter(x => x.CRS_SUBJ_CD === (this.props.dept.CRS_SUBJ_CD));
    
    // removes dup entires that have the same CRS_TITLE and store it in noDup array
    const noDupArr = this.removeDup(printArr, x => x.CRS_TITLE);


    //To style the Header of the Table columns
    let course = <div className="TableHeader">Course</div>
    let num = <div className="TableHeader">Number</div>
    let title = <div className="TableHeader">Title</div>

    const columns = [{
      dataField: 'CRS_SUBJ_CD',
      text: course,
      formatter: this.CellFormatter,
    }, {
      dataField: 'CRS_NBR',
      text: num,
      sort: true,
      formatter: this.CellFormatter,
    }, {
      dataField: 'CRS_TITLE',
      text: title,
      sort: true,
      formatter: this.CellFormatter,
    }];

    const defaultSorted = [{
      dataField: 'CRS_NBR',
      order: 'asc'
    }];
    
    const displayCourseArr = <BootstrapTable
                                bootstrap4
                                keyField="CRS_TITLE"
                                data={ noDupArr }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                striped
                                hover
                                wrapperClasses="table-responsive"
                              />
  
    
    return (
       <div>
        <div>{displayCourseArr}</div>
       </div>
    );

  }

};

export default ListCourse;
