import React, { Component } from 'react';
import './DisplayDept.css';
import Header from './Header';
import Footer from './Footer';
import * as d3 from 'd3';
import data from './CSVData/3Year.csv';

import { Link } from "react-router-dom";

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

// for the search bar in the table
const { SearchBar } = Search;

class DisplayAllProfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
    };
  }

  // Sets the data from csv file to myData state when start
  componentDidMount() {
      window.scrollTo(0, 0);
      d3.csv(data).then(data => {
          this.setState({ myData: data });
      });
  }

  // function that will remove duplicate
  removeDup(data, key) {
      return [
        ...new Map(
          data.map(x=>[key(x), x])
        ).values(),
      ];
  }

  // used to link a row to another page and sends the row data as the props
  CellFormatter(cell, row) {
    return (
      <div>
        <Link to={{pathname: "/displayCRSbyProf", state: { linkState: row }}}> 
            {cell}
        </Link>
      </div>
      );
  }

  render (){
    
    // removes the duplicate entries in the array
    const noDupArr = this.removeDup(this.state.myData, x => x.name1);
    // sorts the array by prof name
    const sortedArr = noDupArr.sort((a,b) => a.name1 > b.name1 ? 1 : -1)
    
    //To style the Header of the Table columns
    let prof = <div className="TableHeader">Professor&#x21D5;</div>
    let dept = <div className="TableHeader">Department&#x21D5;</div>


    // makes the columns which the bootstrap table can use to display
    const columns = [{
      dataField: 'name1',
      text: prof,
      formatter: this.CellFormatter,
      sort: true
    }, {
      dataField: 'DEPT_NAME',
      text: dept,
      sort: true,
      formatter: this.CellFormatter,
    }];
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        localStorage.setItem('listAllCRSByProf', JSON.stringify(row))
      }
    };
    // calls the bootstrap table and tookitprovider which generates the table and makes a search bar for users to quickly find the professor
    // also has the pagination which allows the table to be reduced into multiple pages which the users can easily naviagte
    const displayProfArr = <ToolkitProvider
      keyField="name1"
      data={ sortedArr }
      columns={ columns }
      search
    >
    {
      props => (
        <div>
          <SearchBar { ...props.searchProps } />
          <hr />
          <BootstrapTable pagination={ paginationFactory() }
            { ...props.baseProps } rowEvents={ rowEvents }
          />
        </div>
      )
    }
    </ToolkitProvider>

    return(
      <div className='App'>
        
          < Header />

          <div className="secHeader">
            <h2>Professors Database</h2>
          </div>
          <div className='Table'>
            {displayProfArr} 
          </div>
          
          < Footer />

      </div>
    )
  };
}

export default DisplayAllProfs;
