import React, { Component } from 'react';
import './DisplayDept.css'

import {Card, Form, Button, Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
//import MyToast from './MyToast';
import axios from 'axios';
import DisplayComment from './DisplayComment';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class CommentProf extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.state = {
            /**Set temp variables and all variable to 0 to initalize it to a certain num */
            rateOneTemp: 0, rateTwoTemp: 0, rateThreeTemp: 0, rateFourTemp: 0, rateFiveTemp: 0,
            rateOneAll: 0,  rateTwoAll: 0, rateThreeAll: 0, rateFourAll: 0, rateFiveAll: 0,
            interact: true,
            value: 0,
            userList : [],
            newArr: []
        };
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
        this.rateOne = this.rateOne.bind(this);
        this.rateTwo = this.rateTwo.bind(this);
        this.rateThree = this.rateThree.bind(this);
        this.rateFour = this.rateFour.bind(this);
        this.rateFive = this.rateFive.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/postgressApp/userList")
            .then(response => response.data)
            .then((data) => {
                this.setState({userList: data});
            });
    }

    /**These five functions just retreive each set of ratings */
    rateOne(e){ this.setState({rateOneTemp: e.rating}) }
    rateTwo(e){ this.setState({rateTwoTemp: e.rating}) }
    rateThree(e){ this.setState({rateThreeTemp: e.rating}) }
    rateFour(e){ this.setState({rateFourTemp: e.rating}) }
    rateFive(e){ this.setState({rateFiveTemp: e.rating}) }

    initialState = {
        name:'', comment:'',
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitBook = event => {
        event.preventDefault();

        const book = {
            // userName: this.state.name,
            userComment: this.state.comment,
            crsTitle: this.props.chosenCourseAndProf.CRS_TITLE,
            crsNbr: this.props.chosenCourseAndProf.CRS_NBR,
            crsSubjCd: this.props.chosenCourseAndProf.CRS_SUBJ_CD,
            profName: this.props.chosenCourseAndProf.name1,
            easinessRating: this.state.rateOneTemp,
            helpfulnessRating: this.state.rateTwoTemp,
            clarityRating: this.state.rateThreeTemp,
            workloadRating: this.state.rateFourTemp,
            gradingRating: this.state.rateFiveTemp,
        };

        axios.post("http://localhost:8080/postgressApp/createUser", book)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    window.location.reload();
                } else {
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);

    }

    bookChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {

        const {name, comment,} = this.state;

        // filters the userList array which was taken from the database by the professeor that we are currenlty looking at
        const byProf = this.state.userList.filter(x => x.profName === (this.props.chosenCourseAndProf.name1)); 

        // maps the byProf array so the new array contains only the totalStar from the byProf
        const arrOfCombinedTotalStar = byProf.map(x => ( x.totalStar ));
        
        // adds all the totalStar from the arrOfCombinedTotalStar 
        const totalStarOfAllUser = arrOfCombinedTotalStar.reduce((a, b) => a + b, 0)

        // computes the overall avg by dividing the total from the length of how many users commented
        const overallAvg = (totalStarOfAllUser / arrOfCombinedTotalStar.length).toFixed(2)

        //Repeat for Easiness
        const arrOfCombinedEasyStar = byProf.map(x => ( x.easinessRating ));
        const totalEasyOfAllUser = arrOfCombinedEasyStar.reduce((a, b) => a + b, 0)
        const overallEasy = (totalEasyOfAllUser / arrOfCombinedEasyStar.length).toFixed(2)

        //Repeat for Helpfulness
        const arrOfCombinedHelpStar = byProf.map(x => ( x.helpfulnessRating ));
        const totalHelpOfAllUser = arrOfCombinedHelpStar.reduce((a, b) => a + b, 0)
        const overallHelp = (totalHelpOfAllUser / arrOfCombinedHelpStar.length).toFixed(2)

        //Repeat for Clarity
        const arrOfCombinedClarityStar = byProf.map(x => ( x.clarityRating ));
        const totalClarityOfAllUser = arrOfCombinedClarityStar.reduce((a, b) => a + b, 0)
        const overallClarity = (totalClarityOfAllUser / arrOfCombinedClarityStar.length).toFixed(2)

        //Repeat for Workload
        const arrOfCombinedWorkloadStar = byProf.map(x => ( x.workloadRating ));
        const totalWorkloadOfAllUser = arrOfCombinedWorkloadStar.reduce((a, b) => a + b, 0)
        const overallWorkload = (totalWorkloadOfAllUser / arrOfCombinedWorkloadStar.length).toFixed(2)

        //Repeat for Grading
        const arrOfCombinedGradingStar = byProf.map(x => ( x.gradingRating ));
        const totalGradingOfAllUser = arrOfCombinedGradingStar.reduce((a, b) => a + b, 0)
        const overallGrading = (totalGradingOfAllUser / arrOfCombinedGradingStar.length).toFixed(2)

        byProf.reverse();

        return (
            <div className="reviewSystem">
                {/* displays the overall avg of all cateorgies*/}
                <div className="overallRating">
                    <div className="row">
                        <Col sm>
                            <div className="row">   
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Overall </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallAvg} interactive={false}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Easiness </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallEasy} interactive={false}/>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Helpfulness </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallHelp} interactive={false}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Clarity </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallClarity} interactive={false}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>WorkLoad </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallWorkload} interactive={false}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Grading </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} rating={overallGrading} interactive={false}/>
                                </Col>
                            </div>
                        </Col>

                        <Col sm>
                            <h5> Rated by {byProf.length} Students</h5>
                            <ul class="actions special">
                                    <li class="button">Courses by Professor</li>
                            </ul>
                            <ul class="actions special">
                                    <li class="button">Leave a Review</li>
                            </ul>
                        </Col>
                    </div>
                <hr/>    
                </div>
                
                

                <br/>

                {/* Form for the user to submit to add their review into the database and be displayed on the site */}
                <div>
                    <form onSubmit={this.submitBook}>
                        <div className="row">
                            {/* this is for the star rating */}
                            <Col sm={4}>
                                <div>
                                    <div className="row">
                                        <Col xs={6}>
                                            <h5 style={{textAlign: 'right'}}>Easiness </h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div><Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact} required/> </div>
                                        </Col>
                                    </div>
                                    <div className="row">
                                        <Col xs={6}>
                                            <h5 style={{textAlign: 'right'}}>Helpfulness </h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div><Rater total={5} onRate={this.rateTwo} rating={this.state.rateTwoTemp} interactive={this.state.interact} required/> </div>
                                        </Col>
                                    </div>
                                    <div className="row">
                                        <Col xs={6}>
                                            <h5 style={{textAlign: 'right'}}>Clarity </h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div><Rater total={5} onRate={this.rateThree} rating={this.state.rateThreeTemp} interactive={this.state.interact} required/> </div>
                                        </Col>
                                    </div>
                                    <div className="row">
                                        <Col xs={6}>
                                            <h5 style={{textAlign: 'right'}}>WorkLoad </h5>
                                        </Col>
                                        <Col xs={6}>
                                         <div><Rater total={5} onRate={this.rateFour} rating={this.state.rateFourTemp} interactive={this.state.interact} required/> </div>
                                        </Col>
                                    </div>
                                    <div className="row">
                                        <Col xs={6}>
                                            <h5 style={{textAlign: 'right'}}>Grading </h5>
                                        </Col>
                                        <Col xs={6}>
                                            <div><Rater total={5} onRate={this.rateFive} rating={this.state.rateFiveTemp} interactive={this.state.interact} required/> </div>
                                        </Col>
                                    </div>
                                </div>
                            </Col>

                            {/* this is for the commenting */}
                            <Col sm={8}>
                                <textarea className="commentTag" type="text" name="comment" required
                                    value={comment} onChange={this.bookChange}
                                    placeholder="Rating as (1)Negative to (5)Positive. Comment goes here"
                                >
                                </textarea>
                                <br />
                            </Col>
                        </div>
                        <ul className="actions special">
                                <button className="button">Submit</button>
                        </ul>
                        {/* <button className="button">Submit</button> */}
                    </form>
                </div>
                

                {/* This displays the comments made by the users by mapping the byProf array */}
                <div className="displayComment">
                    {
                    byProf.map((userList) => (
                        <p style={{borderBottom: '2px solid black'}} key={userList.id}>
                            <h2> Anon <small style={{fontSize: '15px'}}><i>Posted on Today </i></small></h2>
                            <p style={{fontWeight: 'bold'}}> Easiness&nbsp; <Rater total={5} rating={userList.easinessRating} interactive={false}/>
                                &nbsp;Helpfulness&nbsp; <Rater total={5} rating={userList.helpfulnessRating} interactive={false}/>
                                &nbsp;Clarity&nbsp; <Rater total={5} rating={userList.clarityRating} interactive={false}/>
                                &nbsp;Workload&nbsp; <Rater total={5} rating={userList.workloadRating} interactive={false}/>
                                &nbsp;Grading&nbsp; <Rater total={5} rating={userList.gradingRating} interactive={false}/> 
                            </p>
                            <p>{userList.userComment}</p>
                            <p>Averages: {overallAvg} - {overallEasy} - {overallHelp} - {overallClarity}
                            - {overallWorkload} - {overallGrading}
                            </p>
                        </p>
                    ))
                    }
                </div>

                {/* <div className="col-12 col-md-8" style={{height: 500, overflowY:'auto'}}> */}
                    {/* <DisplayComment chosenCourseAndProf={this.props.chosenCourseAndProf}/> */}
                {/* </div> */}
            </div>
        );
    }
}
    
export default CommentProf;
