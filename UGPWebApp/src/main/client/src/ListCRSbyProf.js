import React, { Component } from 'react';
import './DisplayDept.css';
import * as d3 from 'd3';
import data from './CSVData/10Year.csv';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

class ListCRSbyProf extends Component {
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
  
  // used to link a row to another route
  CellFormatter(cell, row) {
    return (
      <div>
        <Link to={{pathname: "/displayGrades", state: { linkState: row }}}> 
            {cell}
        </Link>
      </div>
      );
  }
  
  render() {

    var retrievedObject = localStorage.getItem('row');

    // filters the array so the new array contains only the courses that match the name that was passed in as the prop (dept) from displayAllProf
    const printArr = this.state.myData.filter(x => x.name1 === (JSON.parse(retrievedObject).name1));
    // removes dup entires that have the same CRS_SUBJ_CD and CRS_NBR and store it in array
    const noDupArr = printArr.filter((item, index, self) => index === self.findIndex((t) => (t.CRS_SUBJ_CD === item.CRS_SUBJ_CD && t.CRS_TITLE === item.CRS_TITLE)));

    //To style the Header of the Table columns
    let course = <div style={ { outline:'none' }} className="TableHeader">Course&#x21D5;</div>
    let num = <div style={ { outline:'none' }} className="TableHeader">Number&#x21D5;</div>
    let title = <div style={ { outline:'none' }} className="TableHeader">Title&#x21D5;</div>

    // makes the columns which the bootstrap table can use to display
    const columns = [{
      dataField: 'CRS_SUBJ_CD',
      text: course,
      formatter: this.CellFormatter,
      sort: true,
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

    // displays the inital table as sorted
    const defaultSorted = [{
      dataField: 'CRS_NBR',
      order: 'asc'
    }];
    
    // calls the bootstrap table which generates the table with the courses that are taught by the professor selected
    const displayCourseArr = <BootstrapTable
                                bootstrap4
                                keyField="CRS_TITLE"
                                data={ noDupArr }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                striped
                                hover
                              />
      
    return (

       <div className='App'>
        < Header />
        <div className="secHeader">
          <h2>Courses Taught By {JSON.parse(retrievedObject).name1}</h2>
        </div>
        <div className='Table'>
          <div>{displayCourseArr}</div>
        </div>
        
        < Footer />
        
       </div>
    );

  }

};

export default ListCRSbyProf;