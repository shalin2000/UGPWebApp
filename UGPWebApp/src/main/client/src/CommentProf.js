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
            books : []
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
        axios.get("http://localhost:8080/postgressApp/employeeList")
            .then(response => response.data)
            .then((data) => {
                this.setState({books: data});
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

        axios.post("http://localhost:8080/postgressApp/createEmp", book)
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

        // filters the books array which was taken from the database by the professeor that we are currenlty looking at
        const byProf = this.state.books.filter(x => x.profName === (this.props.chosenCourseAndProf.name1)); 

        return (
            <div className="reviewSystem">
                {/* displays the overall avg of all cateorgies*/}
                <div className="overallRating">
                    <div className="row">
                        <Col sm>
                            <div className="row">   
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Overall Rating </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Easiness </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Helpfulness </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Clarity </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/> 
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>WorkLoad </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/>
                                </Col>
                            </div>
                            <div className="row">
                                <Col xs={6}>
                                    <h5 style={{textAlign: 'right'}}>Grading </h5>
                                </Col>
                                <Col xs={6}>
                                    <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/> 
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
                                    placeholder="Enter Your Comment"
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
                    byProf.map((book) => (
                        <p style={{borderBottom: '2px solid black'}} key={book.id}>
                            <h2> Anon <small style={{fontSize: '15px'}}><i>Posted on Today </i></small></h2>
                            <p style={{fontWeight: 'bold'}}> Easiness&nbsp; <Rater total={5} onRate={this.rateFive} rating={book.easinessRating} interactive={false} required/>
                                &nbsp;Helpfulness&nbsp; <Rater total={5} onRate={this.rateFive} rating={book.helpfulnessRating} interactive={false} required/>
                                &nbsp;Clarity&nbsp; <Rater total={5} onRate={this.rateFive} rating={book.clarityRating} interactive={false} required/>
                                &nbsp;Workload&nbsp; <Rater total={5} onRate={this.rateFive} rating={book.workloadRating} interactive={false} required/>
                                &nbsp;Grading&nbsp; <Rater total={5} onRate={this.rateFive} rating={book.gradingRating} interactive={false} required/> 
                            </p>
                            <p>{book.userComment}</p>
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
