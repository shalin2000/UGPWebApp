import React, { Component } from 'react';
import '../DisplayDept.css';
import {Link} from 'react-router-dom';

import * as d3 from 'd3';
import data from './genDemo.csv';
import BootstrapTable from 'react-bootstrap-table-next';

class ListGenEdCourses extends Component {
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
    
  // makes each item in the row clickable and when clicked it links to displayProfessor and sends a prop of the entire row
  CellFormatter(cell, row) {
    return (
      <div>
        <Link to={{pathname: "/displayProfessor", state: { linkState: row }}}> 
            {cell}
        </Link>
      </div>
      );
  }

  render() {

    let genCourses = []

    // if else statesments that will be excusted depending on what the user has chosen as their gen ed
    if (this.props.chosenGenEd === "ANW") {
        genCourses = this.state.myData.filter(x => x.ANW === '1')
    }
    else if (this.props.chosenGenEd === "UIS") {
        genCourses = this.state.myData.filter(x => x.UIS === '1')
    }
    else if (this.props.chosenGenEd === "UP") {
        genCourses = this.state.myData.filter(x => x.UP === '1')
    }
    else if (this.props.chosenGenEd === "UCA") {
        genCourses = this.state.myData.filter(x => x.UCA === '1')
    }
    else if (this.props.chosenGenEd === "EWC") {
        genCourses = this.state.myData.filter(x => x.EWC === '1')
    }
    else if (this.props.chosenGenEd === "UUS") {
        genCourses = this.state.myData.filter(x => x.UUS === '1')
    }

    //To style the Header of the Table columns
    let course = <div className="TableHeader">Course&#x21D5;</div>
    let num = <div className="TableHeader">Number&#x21D5;</div>
    let title = <div className="TableHeader">Title&#x21D5;</div>
    let credit = <div className="TableHeader">Credit&#x21D5;</div>

    // columns for the table and each column calls cellFormatter which attaches the link
    const columns = [{
      dataField: 'CRS_SUBJ_CD',
      text: course,
      sort: true,
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
    }, {
      dataField: 'CRDT',
      text: credit,
      sort: true,
      formatter: this.CellFormatter,
    }];
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        localStorage.setItem('selectedProf', JSON.stringify(row))
      },
      onContextMenu: (e, row, rowIndex) => {
        localStorage.setItem('selectedProf', JSON.stringify(row))
      }
    };
    // displays the columns and data into the a table
    const displayGenCourses = <BootstrapTable
                                bootstrap4
                                keyField="CRS_TITLE"
                                data={ genCourses }
                                columns={ columns } 
                                striped
                                hover
                                wrapperClasses="table-responsive"
                                rowEvents={ rowEvents }
                              />
                   
    return (
       <div>
           {displayGenCourses}
       </div>
    );
  }
};

export default ListGenEdCourses;
