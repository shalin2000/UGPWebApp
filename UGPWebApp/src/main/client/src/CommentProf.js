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
            value: 0
        };
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
        this.rateOne = this.rateOne.bind(this);
        this.rateTwo = this.rateTwo.bind(this);
        this.rateThree = this.rateThree.bind(this);
        this.rateFour = this.rateFour.bind(this);
        this.rateFive = this.rateFive.bind(this);
        this.ratingCompleted = this.ratingCompleted.bind(this);
    }

    /**These five functions just retreive each set of ratings */
    rateOne(e){ this.setState({rateOneTemp: e.rating}) }
    rateTwo(e){ this.setState({rateTwoTemp: e.rating}) }
    rateThree(e){ this.setState({rateThreeTemp: e.rating}) }
    rateFour(e){ this.setState({rateFourTemp: e.rating}) }
    rateFive(e){ this.setState({rateFiveTemp: e.rating}) }

    /**As of now we are using ratingCompleted to disable the ratings (onSubmit)
     * and 'ALL' varibles will be used later to calculate the averages of each ratings
     * and perhaps the to calculate the average of all average ratings comabined
     */
    ratingCompleted() {
        this.setState({ 
            rateOneAll: this.state.rateOneTemp, rateTwoAll: this.state.rateTwoTemp, 
            rateThreeAll: this.state.rateThreeTemp, rateFourAll: this.state.rateFourTemp, 
            rateFiveAll: this.state.rateFiveTemp, interact: false
        })
    }

    initialState = {
        name:'', comment:'',
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitBook = event => {
        event.preventDefault();

        const book = {
            userName: this.state.name,
            userComment: this.state.comment,
            crsTitle: this.props.chosenCourseAndProf.CRS_TITLE,
            crsNbr: this.props.chosenCourseAndProf.CRS_NBR,
            crsSubjCd: this.props.chosenCourseAndProf.CRS_SUBJ_CD,
            profName: this.props.chosenCourseAndProf.name1
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

        return (
            <div className="reviewSystem">
                
                <div className="overallRating">
                    <h5>Overall (placeHolder) rating <Rater total={5}/> </h5>
                </div>

                <br/>

                <div>
                    <form onSubmit={this.submitBook}>
                        <div className="row">
                            {/* this is for the star rating */}
                            <Col sm={4}>
                                <div>
                                    <div className="row">
                                        <Col xs={6}>
                                        <h5 style={{textAlign: 'left'}}>Easiness: </h5>
                                        </Col>
                                        <Col xs={6}>
                                        <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/>
                                        </Col>
                                    </div>
                                    <div className="row">
                                    <Col xs={6}>
                                        <h5 style={{textAlign: 'left'}}>Helpfulness: </h5>
                                        </Col>
                                        <Col xs={6}>
                                        <Rater total={5}  onRate={this.rateTwo} rating={this.state.rateTwoTemp} interactive={this.state.interact} />
                                        </Col>
                                    </div>
                                    <div className="row">
                                    <Col xs={6}>
                                        <h5 style={{textAlign: 'left'}}>Clarity: </h5>
                                        </Col>
                                        <Col xs={6}>
                                        <Rater total={5}  onRate={this.rateThree} rating={this.state.rateThreeTemp} interactive={this.state.interact} />
                                        </Col>
                                    </div>
                                    <div className="row">
                                    <Col xs={6}>
                                        <h5 style={{textAlign: 'left'}}>WorkLoad: </h5>
                                        </Col>
                                        <Col xs={6}>
                                        <Rater total={5}  onRate={this.rateFour} rating={this.state.rateFourTemp} interactive={this.state.interact} />
                                        </Col>
                                    </div>
                                    <div className="row">
                                    <Col xs={6}>
                                        <h5 style={{textAlign: 'left'}}>Grading: </h5>
                                        </Col>
                                        <Col xs={6}>
                                        <Rater total={5}  onRate={this.rateFive} rating={this.state.rateFiveTemp} interactive={this.state.interact} />
                                        </Col>
                                    </div>
                                </div>
                                {/* <br/> */}
                            </Col>

                            {/* this is for the commenting */}
                            <Col sm={8}>
                                {/* <input className="nameTag" type="text" name="name" required
                                        value={name} onChange={this.bookChange}
                                        placeholder="Enter Your Name"
                                />
                                <br /> */}
                                <textarea className="commentTag" type="text" name="comment" required
                                    value={comment} onChange={this.bookChange}
                                    placeholder="Enter Your Comment"
                                >
                                </textarea>
                                <br />
                            </Col>
                        </div>

                        <ul class="actions special">
                                <li class="button">Submit</li>
                        </ul>
                        
                        {/* <button>Comment</button> */}
                    </form>
                </div>

                {/* <div className="col-12 col-md-8" style={{height: 500, overflowY:'auto'}}> */}
                    <DisplayComment chosenCourseAndProf={this.props.chosenCourseAndProf}/>
                {/* </div> */}
            </div>
        );
    }
}
    
export default CommentProf;
