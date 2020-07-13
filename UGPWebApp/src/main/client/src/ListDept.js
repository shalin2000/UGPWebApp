import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './DisplayDept.css';
// import ScrollUpButton from "react-scroll-up-button";
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

    // filters the noDup array by the first letter in CRS_SUBJ_CD 
    const arrA = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('A'));
    const arrB = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('B'));
    const arrC = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('C'));
    const arrD = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('D'));
    const arrE = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('E'));
    const arrF = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('F'));
    const arrG = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('G'));
    const arrH = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('H'));
    const arrI = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('I'));
    const arrJ = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('J'));
    const arrK = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('K'));
    const arrL = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('L'));
    const arrM = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('M'));
    const arrN = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('N'));
    const arrO = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('O'));
    const arrP = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('P'));
    const arrR = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('R'));
    const arrS = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('S'));
    const arrT = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('T'));
    const arrU = noDupArr.filter(x => x.CRS_SUBJ_CD.startsWith('U'));

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
    
    const displayDeptArrA = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrA }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                          </div>

    const displayDeptArrB = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrB }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrC = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrC }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                          </div>
    const displayDeptArrD = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrD }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrE = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrE }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrF = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrF }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrG = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrG }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrH = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrH }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrI = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrI }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrJ = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrJ }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrK = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrK }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrL = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrL }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrM = <div className="react-bootstrap-table-wrapper">
                          <BootstrapTable
                            bootstrap4
                            keyField="CRS_SUBJ_CD"
                            data={ arrM }
                            columns={ columns } 
                            defaultSorted={ defaultSorted } 
                            hover
                          />
                          </div>
    const displayDeptArrN = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrN }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrO = <div className="react-bootstrap-table-wrapper">
                            <BootstrapTable
                              bootstrap4
                              keyField="CRS_SUBJ_CD"
                              data={ arrO }
                              columns={ columns } 
                              defaultSorted={ defaultSorted } 
                              hover
                            />
                            </div>
    const displayDeptArrP = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrP }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrR = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrR }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrS = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrS }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrT = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrT }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>
    const displayDeptArrU = <div className="react-bootstrap-table-wrapper">
                              <BootstrapTable
                                bootstrap4
                                keyField="CRS_SUBJ_CD"
                                data={ arrU }
                                columns={ columns } 
                                defaultSorted={ defaultSorted } 
                                hover
                              />
                            </div>

    return (
      <div>
        <div className='Table1'>
        {/* Using bootstrap to generate a 3 col layout and printing all the DEPT by using the ImportCsvFile class */}
          <div class="row">
            <div className="col-sm-4">
              <h2>A</h2>
              {displayDeptArrA}
            </div>
            
            <div className="col-sm-4">
              <h2>B</h2>
              {displayDeptArrB}
            </div>

            <div className="col-sm-4">
              <h2>C</h2>
              {displayDeptArrC}
            </div>

            <div className="col-sm-4">
              <h2>D</h2>
              {displayDeptArrD}
            </div>

            <div className="col-sm-4">
              <h2>E</h2>
              {displayDeptArrE}
            </div>

            <div className="col-sm-4">
              <h2>F</h2>
              {displayDeptArrF}
            </div>

            <div className="col-sm-4">
              <h2>G</h2>
              {displayDeptArrG}
            </div>

            <div className="col-sm-4">
              <h2>H</h2>
              {displayDeptArrH}
            </div>

            <div className="col-sm-4">
              <h2>I</h2>
              {displayDeptArrI}
            </div>

            <div className="col-sm-4">
              <h2>J</h2>
              {displayDeptArrJ}
            </div>

            <div className="col-sm-4">
              <h2>K</h2>
              {displayDeptArrK}
            </div>

            <div className="col-sm-4">
              <h2>L</h2>
              {displayDeptArrL}
            </div>

            <div className="col-sm-4">
              <h2>M</h2>
              {displayDeptArrM}
            </div>

            <div className="col-sm-4">
              <h2>N</h2>
              {displayDeptArrN}
            </div>

            <div className="col-sm-4">
              <h2>O</h2>
              {displayDeptArrO}
            </div>

            <div className="col-sm-4">
              <h2>P</h2>
              {displayDeptArrP}
            </div>

            <div className="col-sm-4">
              <h2>R</h2>
              {displayDeptArrR}
            </div>

            <div className="col-sm-4">
              <h2>S</h2>
              {displayDeptArrS}
            </div>

            <div className="col-sm-4">
              <h2>T</h2>
              {displayDeptArrT}
            </div>

            <div className="col-sm-4">
              <h2>U</h2>
              {displayDeptArrU}
            </div>
          </div>
         </div>
       </div>
    );

  }

};

export default ListDept;
