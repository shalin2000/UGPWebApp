import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './DisplayDept.css';
import ScrollUpButton from "react-scroll-up-button";
import * as d3 from 'd3';
import data from './CSVData/3Year.csv';
import BootstrapTable from 'react-bootstrap-table-next';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ListDept extends Component {
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
        <Link to={{pathname: "/displayCourse", state: { linkState: row }}}> 
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
    // removes dup entires that have the same CRS_SUBJ_CD and store it in noDup array
    const noDupArr = this.removeDup(this.state.myData, x => x.CRS_SUBJ_CD);

    // filters the noDup array by the first letter in CRS_SUBJ_CD where the first letter is passed in as props 
    const sameLetterArr = noDupArr.filter(x => x.CRS_SUBJ_CD.toLowerCase().startsWith(this.props.letter));

    const columns = [{
      dataField: 'CRS_SUBJ_CD',
      formatter: this.CellFormatter,
    }, {
      dataField: 'CRS_SUBJ_DESC',
      formatter: this.CellFormatter,
    }];

    const defaultSorted = [{
      dataField: 'CRS_SUBJ_CD',
      order: 'asc'
    }];
    
    const displayDeptArr = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ sameLetterArr }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>

    return (
       <div>
         <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
          {displayDeptArr}
       </div>
    );

  }

};

export default ListDept;
