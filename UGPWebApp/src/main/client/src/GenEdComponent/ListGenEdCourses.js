import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../DisplayDept.css';
import {Link} from 'react-router-dom';

import * as d3 from 'd3';
import data from './genDemo.csv';
import BootstrapTable from 'react-bootstrap-table-next';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


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
    let course = <div className="TableHeader">Course</div>
    let num = <div className="TableHeader">Number</div>
    let title = <div className="TableHeader">Title</div>
    let credit = <div className="TableHeader">Credit</div>

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
    
    const displayGenCourses = <BootstrapTable
                                bootstrap4
                                keyField="CRS_TITLE"
                                data={ genCourses }
                                columns={ columns } 
                                striped
                                hover
                                wrapperClasses="table-responsive"
                              />
                   
    return (
       <div>
           {displayGenCourses}
       </div>
    );

  }

};

export default ListGenEdCourses;
