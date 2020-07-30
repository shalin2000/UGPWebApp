import React, { Component } from 'react';

import './DisplayDept.css';
import * as d3 from 'd3';
import data from './CSVData/3Year.csv';
import BootstrapTable from 'react-bootstrap-table-next';

import { Link } from "react-router-dom";

class ListDept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
    };
  }
  
  // when component mounts it will set state from 3year to our state
  componentDidMount() {
    d3.csv(data).then(data => {
        this.setState({ myData: data });
      });
  }

  // formats the row in each table in which when item presesd in row, it will link to displayCourse
  CellFormatter(cell, row) {
    return (
      <div>
        {/* {localStorage.setItem('row', JSON.stringify(row))}  */}
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

  // function which will generate the table
  generateTable(arr){
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
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        localStorage.setItem('chosenCourse', JSON.stringify(row))
      },
      onContextMenu: (e, row, rowIndex) => {
        localStorage.setItem('chosenCourse', JSON.stringify(row))
      }
    };
    return <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arr }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                              rowEvents={ rowEvents }
                            />
      </div>
  }

  // displays the tables in return
  displayDeptByLetter(letter, arr){
    return <div className="col-sm-4">
              <h2>{letter}</h2>
              {arr}
          </div>
  }

  render() {    
    // removes dup entires that have the same CRS_SUBJ_CD and store it in noDup array
    const noDupArr = this.removeDup(this.state.myData, x => x.CRS_SUBJ_CD);

    // filters the noDup array by the first letter in CRS_SUBJ_CD 
    const arrA = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('A')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrB = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('B')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrC = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('C')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrD = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('D')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrE = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('E')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrF = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('F')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrG = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('G')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrH = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('H')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrI = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('I')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrJ = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('J')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrK = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('K')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrL = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('L')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrM = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('M')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrN = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('N')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrO = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('O')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrP = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('P')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrR = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('R')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrS = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('S')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrT = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('T')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);
    const arrU = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('U')).sort((a,b) => a.CRS_SUBJ_CD > b.CRS_SUBJ_CD ? 1 : -1);

    // makes the table and columsn in the table with the data from the arrays above
    const displayDeptArrA = this.generateTable(arrA);
    const displayDeptArrB = this.generateTable(arrB);
    const displayDeptArrC = this.generateTable(arrC);
    const displayDeptArrD = this.generateTable(arrD);
    const displayDeptArrE = this.generateTable(arrE);
    const displayDeptArrF = this.generateTable(arrF);
    const displayDeptArrG = this.generateTable(arrG);
    const displayDeptArrH = this.generateTable(arrH);
    const displayDeptArrI = this.generateTable(arrI);
    const displayDeptArrJ = this.generateTable(arrJ);
    const displayDeptArrK = this.generateTable(arrK);
    const displayDeptArrL = this.generateTable(arrL);
    const displayDeptArrM = this.generateTable(arrM);
    const displayDeptArrN = this.generateTable(arrN);
    const displayDeptArrO = this.generateTable(arrO);
    const displayDeptArrP = this.generateTable(arrP);
    const displayDeptArrR = this.generateTable(arrR);
    const displayDeptArrS = this.generateTable(arrS);
    const displayDeptArrT = this.generateTable(arrT);
    const displayDeptArrU = this.generateTable(arrU);

    return (
      <div>
        <div className='Table1'>
        {/* Using bootstrap to generate a 3 col layout and printing all the DEPT by using the ImportCsvFile class */}
          <div class="row">
            {this.displayDeptByLetter("A", displayDeptArrA)}
            {this.displayDeptByLetter("B", displayDeptArrB)}
            {this.displayDeptByLetter("C", displayDeptArrC)}
            {this.displayDeptByLetter("D", displayDeptArrD)}
            {this.displayDeptByLetter("E", displayDeptArrE)}
            {this.displayDeptByLetter("F", displayDeptArrF)}
            {this.displayDeptByLetter("G", displayDeptArrG)}
            {this.displayDeptByLetter("H", displayDeptArrH)}
            {this.displayDeptByLetter("I", displayDeptArrI)}
            {this.displayDeptByLetter("J", displayDeptArrJ)}
            {this.displayDeptByLetter("K", displayDeptArrK)}
            {this.displayDeptByLetter("L", displayDeptArrL)}
            {this.displayDeptByLetter("M", displayDeptArrM)}
            {this.displayDeptByLetter("N", displayDeptArrN)}
            {this.displayDeptByLetter("O", displayDeptArrO)}
            {this.displayDeptByLetter("P", displayDeptArrP)}
            {this.displayDeptByLetter("R", displayDeptArrR)}
            {this.displayDeptByLetter("S", displayDeptArrS)}
            {this.displayDeptByLetter("T", displayDeptArrT)}
            {this.displayDeptByLetter("U", displayDeptArrU)}
          </div>
        </div>
      </div>
    );

  }

};

export default ListDept;
