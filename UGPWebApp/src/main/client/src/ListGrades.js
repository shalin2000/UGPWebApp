import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import './DisplayDept.css';
import * as d3 from 'd3';
import fall2019Data from './CSVData/Fall2019.csv'
import fall2018Data from './CSVData/Fall2018.csv'
import fall2017Data from './CSVData/Fall2017.csv'
import fall2016Data from './CSVData/Fall2016.csv'
import fall2015Data from './CSVData/Fall2015.csv'
import fall2014Data from './CSVData/Fall2014.csv'
import fall2013Data from './CSVData/Fall2013.csv'
import fall2012Data from './CSVData/Fall2012.csv'
import fall2011Data from './CSVData/Fall2011.csv'
import fall2010Data from './CSVData/Fall2010.csv'
import spring2020Data from './CSVData/Spr2020.csv';
import spring2019Data from './CSVData/Spr2019.csv';
import spring2018Data from './CSVData/Spr2018.csv';
import spring2017Data from './CSVData/Spr2017.csv';
import spring2016Data from './CSVData/Spr2016.csv';
import spring2015Data from './CSVData/Spr2015.csv';
import spring2014Data from './CSVData/Spr2014.csv';
import spring2013Data from './CSVData/Spr2013.csv';
import spring2012Data from './CSVData/Spr2012.csv';
import spring2011Data from './CSVData/Spr2011.csv';
import spring2010Data from './CSVData/Spr2010.csv';
import ScrollUpButton from "react-scroll-up-button";
import CommentProf from './CommentProf';

class ListGrades extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // Stores all the data from the csv files
        mySpring2020Data: [], mySpring2019Data: [], mySpring2018Data: [], mySpring2017Data: [], mySpring2016Data: [], mySpring2015Data: [],
        mySpring2014Data: [], mySpring2013Data: [], mySpring2012Data: [], mySpring2011Data: [], mySpring2010Data: [],
        myfall19: [], myfall18: [], myfall17: [], myfall16: [], myfall15: [], 
        myfall14: [], myfall13: [], myfall12: [], myfall11: [], myfall10: [],
        // contains what the user selects from the dropdown
        selectVal: " ",
        // grades that are stored depedning on the what semester they have chosen 
        A: 0, B: 0, C: 0, D: 0, F: 0, W: 0,
        // used to determine if there are 0 letter grades then it would display chart with other information
        howManyLetterGrades: 0,
        // the other columns are stored
        ADV: 0, CR: 0, DFR: 0, I: 0, NG: 0, NR: 0, O: 0, PR: 0, S: 0, U: 0,
        // depending on the semester chosen it will set the correct data into this array
        chosenData: [],
        // used to avoid infinite loop
        selectedbool: true,
        // used to print intial graph as letter grade graph instead of not valid graph
        intialGraph: true
      }
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      this.termSelected = this.termSelected.bind(this);
  }  

  // When the target value that the user selects from the dropdown it will check which if statement it matches with which will then set the correct term data to chosenData
  handleDropdownChange(e) {
    if (e.target.value === "Spring2020"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2020Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2019"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall19, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2019"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2019Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2018"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall18, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2018"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2018Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2017"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall17, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2017"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2017Data, selectedbool: true, intialGraph: false});
    }
    if (e.target.value === "Fall2016"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall16, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2016"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2016Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2015"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall15, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2015"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2015Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2014"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall14, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2014"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2014Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2013"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall13, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2013"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2013Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2012"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall12, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2012"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2012Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2011"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall11, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2011"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2011Data, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Fall2010"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.myfall10, selectedbool: true, intialGraph: false });
    }
    if (e.target.value === "Spring2010"){
      this.setState({ selectVal: e.target.value, chosenData: this.state.mySpring2010Data, selectedbool: true, intialGraph: false });
    }
  }

  // filters the correct data from the semester that the user chose and it will set the state for the grade letters and if its empty then letter grades are 0
  termSelected(){
    // filters the data from the chosenData array which is the data from the term that the user has selected from drop down 
    const selectedTermArr = this.state.chosenData.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_NBR === (this.props.ProfInfo.CRS_NBR) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    if (selectedTermArr.length > 0){
      this.setState({ A:  selectedTermArr[0].A, B:  selectedTermArr[0].B, C:  selectedTermArr[0].C, D:  selectedTermArr[0].D, 
                      F:  selectedTermArr[0].F, W:  selectedTermArr[0].W, selectedbool: false, ADV:  selectedTermArr[0].ADV, 
                      CR:  selectedTermArr[0].CR, DFR:  selectedTermArr[0].DFR, I:  selectedTermArr[0].I, NG:  selectedTermArr[0].NG,
                      NR:  selectedTermArr[0].NR, O:  selectedTermArr[0].O, PR:  selectedTermArr[0].PR, S:  selectedTermArr[0].S,
                      U: selectedTermArr[0].U, howManyLetterGrades: selectedTermArr[0].A + selectedTermArr[0].B + selectedTermArr[0].C + selectedTermArr[0].D + selectedTermArr[0].F
                    });
    }
    else {
      this.setState({ A:  0, B:  0, C:  0, D:  0, F:  0, W:  0, selectedbool: false, 
                      ADV: 0, CR: 0, DFR: 0, I: 0, NG: 0, NR: 0, O: 0, PR: 0, S: 0, U: 0 
                    });
    }
  }
  
  // Sets the data from csv files to different states when mounted
  componentDidMount() {
    Promise.all([
      d3.csv(spring2019Data), d3.csv(spring2018Data), d3.csv(spring2017Data), d3.csv(spring2016Data), d3.csv(spring2015Data),
      d3.csv(spring2014Data), d3.csv(spring2013Data), d3.csv(spring2012Data), d3.csv(spring2011Data), d3.csv(spring2010Data),
      d3.csv(fall2019Data), d3.csv(fall2018Data), d3.csv(fall2017Data), d3.csv(fall2016Data), d3.csv(fall2015Data),
      d3.csv(fall2014Data), d3.csv(fall2013Data), d3.csv(fall2012Data), d3.csv(fall2011Data), d3.csv(fall2010Data), d3.csv(spring2020Data)
    ]).then(files => {
      this.setState({ 
        mySpring2019Data: files[0], mySpring2018Data: files[1], mySpring2017Data: files[2], mySpring2016Data: files[3], mySpring2015Data: files[4], 
        mySpring2014Data: files[5], mySpring2013Data: files[6], mySpring2012Data: files[7], mySpring2011Data: files[8], mySpring2010Data: files[9],
        myfall19: files[10], myfall18: files[11], myfall17: files[12], myfall16: files[13], myfall15: files[14],
        myfall14: files[15], myfall13: files[16], myfall12: files[17], myfall11: files[18], myfall10: files[19], mySpring2020Data: files[20],
      })
    })
  }

  render() {
    
    // -------------------- used to determine the other courses that are taught by this professor and links the course to that specifc course --------------------
    
    // filters and maps the courses that is taught by the same professors in the selected semester
    const coursesTaught = this.state.chosenData.filter( x => x.name1 === (this.props.ProfInfo.name1)).map((obj, idx) => {
      return <Link to={{pathname: "/displayProfessor", state: { linkState: obj }}} key={idx}>
              <li className={'DeptList'}>
              {obj.CRS_SUBJ_CD} {obj.CRS_NBR} - {obj.CRS_TITLE}
              </li>
          </Link>;
    });
      
    const cT_Element = coursesTaught.length > 0 ? <div> <h1><u>Courses taught by {this.props.ProfInfo.name1} in - {this.state.selectVal}</u></h1> {coursesTaught} </div> : null

    // --------------------------- filters all the csv data for each semster by the professor that is currently chosen ---------------------------
    
    // filter the original data to only have the data for the specific professor and course title which can later be used to see if the professor has taught that course that semester
    const spring2020Arr = this.state.mySpring2020Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2019Arr = this.state.myfall19.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2019Arr = this.state.mySpring2019Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2018Arr = this.state.myfall18.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2018Arr = this.state.mySpring2018Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2017Arr = this.state.myfall17.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2017Arr = this.state.mySpring2017Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2016Arr = this.state.myfall16.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2016Arr = this.state.mySpring2016Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2015Arr = this.state.myfall15.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2015Arr = this.state.mySpring2015Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2014Arr = this.state.myfall14.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2014Arr = this.state.mySpring2014Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2013Arr = this.state.myfall13.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2013Arr = this.state.mySpring2013Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2012Arr = this.state.myfall12.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2012Arr = this.state.mySpring2012Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2011Arr = this.state.myfall11.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2011Arr = this.state.mySpring2011Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const fall2010Arr = this.state.myfall10.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD)); 
    const spring2010Arr = this.state.mySpring2010Data.filter(x => x.name1 === (this.props.ProfInfo.name1) && x.CRS_TITLE === (this.props.ProfInfo.CRS_TITLE) && x.CRS_SUBJ_CD === (this.props.ProfInfo.CRS_SUBJ_CD));

    // ------------------------------------- combines all the semsters and calculates all the total letter grade for combined -------------------------------------

    // combines all the semester data into one array of objects which can be used to sum all the A, B, C, etc..
    const allSemCombinedArr = [...fall2019Arr, ...spring2019Arr, ...fall2018Arr, ...spring2018Arr,
                              ...fall2017Arr, ...spring2017Arr, ...fall2016Arr, ...spring2016Arr, 
                              ...fall2015Arr, ...spring2015Arr, ...fall2014Arr, ...spring2014Arr, 
                              ...fall2013Arr, ...spring2013Arr, ...fall2012Arr, ...spring2012Arr, 
                              ...fall2011Arr, ...spring2011Arr, ...fall2010Arr, ...spring2010Arr, ...spring2020Arr];
    
    // get sum of all A across all objects in array 
    const totalGradesA = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.A);
    }, 0);

    // get sum of all B across all objects in array 
    const totalGradesB = allSemCombinedArr.reduce(function(prev, cur) {
    return prev + parseInt(cur.B);
    } , 0);    

    // get sum of all C across all objects in array 
    const totalGradesC = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.C);
    }, 0);

    // get sum of all D across all objects in array 
    const totalGradesD = allSemCombinedArr.reduce(function(prev, cur) {
    return prev + parseInt(cur.D);
    } , 0);

    // get sum of all F across all objects in array 
    const totalGradesF = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.F);
    }, 0);

    // get sum of all W across all objects in array 
    const totalGradesW = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.W);
    } , 0);

    // get sum of all ADV across all objects in array 
    const totalGradesADV = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.ADV);
    } , 0);

    // get sum of all CR across all objects in array 
    const totalGradesCR = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.CR);
    } , 0);

    // get sum of all DFR across all objects in array 
    const totalGradesDFR = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.DFR);
    } , 0);

    // get sum of all I across all objects in array 
    const totalGradesI = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.I);
    } , 0);

    // get sum of all NG across all objects in array 
    const totalGradesNG = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.NG);
    } , 0);

    // get sum of all NR across all objects in array 
    const totalGradesNR = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.NR);
    } , 0);

    // get sum of all O across all objects in array 
    const totalGradesO = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.O);
    } , 0);

    // get sum of all PR across all objects in array 
    const totalGradesPR = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.PR);
    } , 0);

    // get sum of all S across all objects in array 
    const totalGradesS = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.S);
    } , 0);

    // get sum of all U across all objects in array 
    const totalGradesU = allSemCombinedArr.reduce(function(prev, cur) {
      return prev + parseInt(cur.U);
    } , 0);
    
    
    const totalStudentsTaught2 = totalGradesADV+totalGradesI+totalGradesO+totalGradesU+totalGradesCR+totalGradesNG+totalGradesPR
    +totalGradesW+totalGradesDFR+totalGradesNR+totalGradesS;

    const overallLetterGradeCount = totalGradesA+totalGradesB+totalGradesC+totalGradesD+totalGradesF;
    // returns the total amount of students from adding all the letter grades
    const totalStudentsTaught = totalGradesA+totalGradesB+totalGradesC+totalGradesD+totalGradesF+totalGradesW

    // -------------------------------------------------------- State for the three different graphs --------------------------------------------------------

    // Maps the grade overall using the data from all semster that the professor has taught
    const overallGradeChart = {
      labels: ['A', 'B','C', 'D', 'F', 'W'],
      datasets: [
        {
          label: "Overall Data",
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2,
          data: [ parseFloat(((totalGradesA/totalStudentsTaught) * 100).toFixed(2)), parseFloat(((totalGradesB/totalStudentsTaught) * 100).toFixed(2)),
                  parseFloat(((totalGradesC/totalStudentsTaught) * 100).toFixed(2)), parseFloat(((totalGradesD/totalStudentsTaught) * 100).toFixed(2)), 
                  parseFloat(((totalGradesF/totalStudentsTaught) * 100).toFixed(2)), parseFloat(((totalGradesW/totalStudentsTaught) * 100).toFixed(2))]
        },
      ]
    }

    const overallGradeChart2  = {
      labels: ['Advanced', 'Credit','Deferred', 'Incomplete', 'Non-graded', 'Not Reported', 'Outstanding', 'Proficient', 'Satisfactory', 'Unsatisfactory', 'Withdrawn'],
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(78, 169, 107, 0.2)', 
            'rgba(173, 113, 116, 0.2)', 'rgba(214, 47, 227, 0.2)', 'rgba(188, 58, 0, 0.2)', 
            'rgba(43, 81, 106, 0.2)', 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(78, 169, 107, 1)', 
              'rgba(173, 113, 116, 1)', 'rgba(214, 47, 227, 1)', 'rgba(188, 58, 0, 1)', 
              'rgba(43, 81, 106, 1)', 'rgba(255, 159, 64, 1)', 
          ],
          borderWidth: 2,
          data: [parseFloat(((totalGradesADV/totalStudentsTaught2) * 100).toFixed(2)), parseFloat(((totalGradesCR/totalStudentsTaught2) * 100).toFixed(2)),
            parseFloat(((totalGradesDFR/totalStudentsTaught2) * 100).toFixed(2)), parseFloat(((totalGradesI/totalStudentsTaught2) * 100).toFixed(2)),
            parseFloat(((totalGradesNG/totalStudentsTaught2) * 100).toFixed(2)), parseFloat(((totalGradesNR/totalStudentsTaught2) * 100).toFixed(2)),
            parseFloat(((totalGradesO/totalStudentsTaught2) * 100).toFixed(2)), parseFloat(((totalGradesPR/totalStudentsTaught2) * 100).toFixed(2)),  
            parseFloat(((totalGradesS/totalStudentsTaught2) * 100).toFixed(2)), parseFloat(((totalGradesU/totalStudentsTaught2) * 100).toFixed(2)),
            parseFloat(((totalGradesW/totalStudentsTaught2) * 100).toFixed(2))]
        },
      ]
    }

    // Display the grades based on the the semster that has been chosen
    const letterGradeGraph = {
      labels: ['A', 'B','C', 'D', 'F', 'W'],
      datasets: [
        {
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2,
          data: [parseInt(this.state.A), parseInt(this.state.B), parseInt(this.state.C), 
                 parseInt(this.state.D), parseInt(this.state.F), parseInt(this.state.W)],
        }
      ]
    }

    // when there are no letter grades, it will display this chart
    const noLetterGradeGraph = {
      labels: ['Advanced', 'Credit','Deferred', 'Incomplete', 'Non-graded', 'Not Reported', 'Outstanding', 'Proficient', 'Satisfactory', 'Unsatisfactory', 'Withdrawn'],
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(78, 169, 107, 0.2)', 
            'rgba(173, 113, 116, 0.2)', 'rgba(214, 47, 227, 0.2)', 'rgba(188, 58, 0, 0.2)', 
            'rgba(43, 81, 106, 0.2)', 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(78, 169, 107, 1)', 
              'rgba(173, 113, 116, 1)', 'rgba(214, 47, 227, 1)', 'rgba(188, 58, 0, 1)', 
              'rgba(43, 81, 106, 1)', 'rgba(255, 159, 64, 1)', 
          ],
          borderWidth: 2,
          data: [parseInt(this.state.ADV), parseInt(this.state.CR), parseInt(this.state.DFR), 
                 parseInt(this.state.I), parseInt(this.state.NG), parseInt(this.state.NR),
                 parseInt(this.state.O), parseInt(this.state.PR), parseInt(this.state.S),
                 parseInt(this.state.U), parseInt(this.state.W)
                ],
        }
      ]
    }

    // -------------------------------------------------------- Display the three different graphs --------------------------------------------------------

    const displayInitalGraph = <div className='chart-container'>
                                <Bar
                                data={letterGradeGraph}
                                options={{
                                    title:{
                                        display:true,
                                        text:'Semester Grade Distrubtion',
                                        fontSize:20
                                    },
                                    legend:{
                                      display:false,
                                      position:'right'
                                    },
                                    // makes y-axis start at 0 
                                    scales: {
                                      yAxes: [{
                                          ticks: {
                                              beginAtZero: true
                                          }
                                      }]
                                    },
                                    responsive: true, 
                                    maintainAspectRatio: false
                                }}
                                />
                              </div>

    const displayLetterGraph = <div className='chart-container'>
                                <Bar
                                data={letterGradeGraph}
                                options={{
                                    title:{
                                        display:true,
                                        text:'Semester Grade Distrubtion',
                                        fontSize:20
                                    },
                                    legend:{
                                      display:false,
                                      position:'right'
                                    },
                                    // makes y-axis start at 0 
                                    scales: {
                                      yAxes: [{
                                          ticks: {
                                              beginAtZero: true
                                          }
                                      }]
                                    },
                                    responsive: true, 
                                    maintainAspectRatio: false
                                }}
                                />
                              </div>

    const displayNoLetterGraph = <div className='chart-container'>
                                  <Bar
                                  data={noLetterGradeGraph}
                                  options={{
                                      title:{
                                          display:true,
                                          text:'Semester Grade Distrubtion',
                                          fontSize:20
                                      },
                                      legend:{
                                        display:false,
                                        position:'bottom'
                                      },
                                      // makes y-axis start at 0 
                                      scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                      },
                                      responsive: true, 
                                      maintainAspectRatio: false
                                  }}
                                  />
                                </div>

    const displayOverAllGraph = <div className='chart-container'>
                                  <Bar
                                  data={overallLetterGradeCount > 0 ? overallGradeChart : overallGradeChart2}
                                  options={{
                                      title:{
                                          display:true,
                                          text:'Overall Grade Distrubtion (%)',
                                          fontSize:20
                                      },
                                      legend:{
                                        display:false,
                                        position:'right'
                                      },
                                      // adds the percentage to the data values that are displayed for each bar
                                      tooltips: {
                                        callbacks: {
                                            label: function(tooltipItems) {
                                                return tooltipItems.yLabel + ' %';
                                            }
                                        }
                                      },
                                      // makes y-axis start at 0 
                                      scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                      },
                                      responsive: true, 
                                      maintainAspectRatio: false
                                  }}
                                  />
                                </div>

    return (
      <div>
        <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
        {/* makes the drop down menu for the sesmters that the professor has taught in these course */}
        <select className="mdb-select md-form colorful-select dropdown-primary" 
        style={{width: '50%', margin:'auto', display:'block'}} onChange={this.handleDropdownChange}>
          <option value="N/A">Choose your semester</option>
          {/* if the lenght is greater than 0 then it means the professor has taught that semester and will be displayed as an option else it wont be displayed */}
          {spring2020Arr.length > 0 ? <option value="Spring2020">Spring 2020</option> : null}
          {fall2019Arr.length > 0 ? <option value="Fall2019">Fall 2019</option> : null}
          {spring2019Arr.length > 0 ? <option value="Spring2019">Spring 2019</option> : null}
          {fall2018Arr.length > 0 ? <option value="Fall2018">Fall 2018</option> : null }
          {spring2018Arr.length > 0 ? <option value="Spring2018">Spring 2018</option> : null }
          {fall2017Arr.length > 0 ? <option value="Fall2017">Fall 2017</option> : null }
          {spring2017Arr.length > 0 ? <option value="Spring2017">Spring 2017</option> : null }
          {fall2016Arr.length > 0 ? <option value="Fall2016">Fall 2016</option> : null }
          {spring2016Arr.length > 0 ? <option value="Spring2016">Spring 2016</option> : null }
          {fall2015Arr.length > 0 ? <option value="Fall2015">Fall 2015</option> : null }
          {spring2015Arr.length > 0 ? <option value="Spring2015">Spring 2015</option> : null }
          {fall2014Arr.length > 0 ? <option value="Fall2014">Fall 2014</option> : null }
          {spring2014Arr.length > 0 ? <option value="Spring2014">Spring 2014</option> : null }
          {fall2013Arr.length > 0 ? <option value="Fall2013">Fall 2013</option> : null }
          {spring2013Arr.length > 0 ? <option value="Spring2013">Spring 2013</option> : null }
          {fall2012Arr.length > 0 ? <option value="Fall2012">Fall 2012</option> : null }
          {spring2012Arr.length > 0 ? <option value="Spring2012">Spring 2012</option> : null }
          {fall2011Arr.length > 0 ? <option value="Fall2011">Fall 2011</option> : null }
          {spring2011Arr.length > 0 ? <option value="Spring2011">Spring 2011</option> : null }
          {fall2010Arr.length > 0 ? <option value="Fall2010">Fall 2010</option> : null }
          {spring2010Arr.length > 0 ? <option value="Spring2010">Spring 2010</option> : null }
        </select>

        {/* calls the termselected function which assigns correct data for the term that the user has chosen */}
        <div>{this.state.selectedbool ? this.termSelected() : null}</div>

        {/* creates the chart for semster grade Distrubtion depending on if there are any letter grades or not*/}
        {/* nested tarnaray operatoer which first diplays letter graph when N/A and then when semster is chosen it will display the other graphs approtiately */}
        {this.state.intialGraph ? displayInitalGraph : this.state.howManyLetterGrades > 0 ? displayLetterGraph : displayNoLetterGraph}
        {/* displays the overall graph for that course with that specific professor taught */}
        {displayOverAllGraph}

        <br/>
        <header className="major container medium">
          <h2>{this.props.ProfInfo.name1} Reviews</h2>					
        </header>
        <br></br>
        
        {/* <div className="overallRating"> */}
          < CommentProf chosenCourseAndProf={this.props.ProfInfo}/>
        {/* </div> */}

      </div>
      
    );
  }

};

export default ListGrades;