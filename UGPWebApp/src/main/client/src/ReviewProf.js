import React, { Component } from 'react';

import './DisplayDept.css';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class ReviewProf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /**Set temp variables and all variable to 0 to initalize it to a certain num */
            rateOneTemp: 0, rateTwoTemp: 0, rateThreeTemp: 0, rateFourTemp: 0, rateFiveTemp: 0,
            rateOneAll: 0,  rateTwoAll: 0, rateThreeAll: 0, rateFourAll: 0, rateFiveAll: 0,
            interact: true,
            value: 0
        };
        // this.ratingCompleted = this.ratingCompleted.bind(this);
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

    render() {
        return (
          <div>
            <h5>Overall teaching</h5>
            <Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact}/>
            <h5>Use of tech</h5>
            <Rater total={5}  onRate={this.rateTwo} rating={this.state.rateTwoTemp} interactive={this.state.interact} />
            <h5>Course Difficulty?</h5>
            <Rater total={5}  onRate={this.rateThree} rating={this.state.rateThreeTemp} interactive={this.state.interact} />
            <h5>Homework heavy?</h5>
            <Rater total={5}  onRate={this.rateFour} rating={this.state.rateFourTemp} interactive={this.state.interact} />
            <h5>Likely to take again?</h5>
            <Rater total={5}  onRate={this.rateFive} rating={this.state.rateFiveTemp} interactive={this.state.interact} />
            <br/>
            <button onClick = {this.ratingCompleted}>Submit</button>
          </div>
        );
    }
}
    
export default ReviewProf;
