import React, { Component } from 'react';
import './DisplayDept.css'

import {Col} from 'react-bootstrap';
import axios from 'axios';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { Link } from "react-router-dom";
  
class CommentProf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set to 0 since the intial rating out of 5 is 0 and will change when users rates
            rateOneTemp: 0, rateTwoTemp: 0, rateThreeTemp: 0, rateFourTemp: 0, rateFiveTemp: 0,
            interact: true,
            value: 0,
            userList : [],  // stores all the reviews from the backend that was fetched into this array
            btnDisable: true,   // bool to make sure the comment button is disabled if requirement not met
            comment: '',
            show: false,
            datePosted: '', // tells the date when user posted 
            badWords: ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"]
        };
        this.formChange = this.formChange.bind(this);
        this.submitReviewForm = this.submitReviewForm.bind(this);
        this.rateOne = this.rateOne.bind(this);
        this.rateTwo = this.rateTwo.bind(this);
        this.rateThree = this.rateThree.bind(this);
        this.rateFour = this.rateFour.bind(this);
        this.rateFive = this.rateFive.bind(this);
        this.ratingAndCommentComplete = this.ratingAndCommentComplete.bind(this);
    }

    // when component mounts, we do 'get' method from the url (backend) which sets the state of userList to all the comments that have been made by users
    componentDidMount() {
        axios.get("https://gradepal20.herokuapp.com/userList")
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
    // checks to see if each field in the review form is filled out
    ratingAndCommentComplete(){ this.setState({btnDisable: false}) }

    // when user sumbits the review form, it will send the data from the form to the backend which will store it in the database
    submitReviewForm = event => {
        // check if there exist bad word in the comment that the user wrote, if yes then dont submit and give alert
        if (this.state.badWords.some(word => this.state.comment.toLowerCase().split(" ").includes(word)) === true){
            alert("Refrain from using inappropriate words")
            return false;
        }

        event.preventDefault();

        // sets all the columns in the database to the value that is being filled out by the user
        const info = {
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

        // post the values in each column to the url below
        axios.post("https://gradepal20.herokuapp.com/createUser", info)
            .then(response => {
                if(response.data != null) {
                    this.setState({show:true});
                    setTimeout(() => this.setState({show:false}), 3000);
                    window.location.reload();
                } else {
                    this.setState({show:false});
                }
            });
        // makes the comment section empty again for new review
        this.setState({comment: ''});

    }

    // when user makes change in the form, it will update the entry as the user types so they can see what is being typed
    formChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        // deconstures the state so we can use the variable comment rather than doing this.state.comment
        const {comment,} = this.state;

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

        // makes the latest comment appear first
        byProf.reverse();

        return (
            <div className="reviewSystem">
                {/* displays the overall avg of all cateorgies by showing the star being filled out*/}
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

                        {/* displays the amount of students who reviewed this professor */}
                        <Col sm>
                            {byProf.length > 0 ? (byProf.length === 1 ? <h5> Rated by {byProf.length} Student</h5> : <h5> Rated by {byProf.length} Students</h5>) : <h5> Be the first to <br/>leave a review!</h5>}
                            {/* button that will take the user to the page where it will show all the courses that are being taught by the professor they are selected in */}
                            <ul class="actions special">
                                    <Link to={{pathname: "/displayCRSbyProf", state: { linkState: this.props.chosenCourseAndProf }}}><li class="button">Courses by Professor</li></Link>
                            </ul>

                            {/* ------ this is the pop up when u press leave a review button ------ */}
                            <button type="button" class="button" data-toggle="modal" data-target="#exampleModalCenter">
                            Leave a Review
                            </button>

                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Rate your Professor</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {/* the content of the modal body, where the form is */}
                                <div class="modal-body">
                                <div>
                                    <form onSubmit="return this.submitReviewForm">
                                        {/* this is for the star rating */}
                                        <div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 style={{textAlign: 'right'}}>Easiness </h5>
                                                </div>
                                                <div className="col">
                                                    <div><Rater total={5} onRate={this.rateOne} rating={this.state.rateOneTemp} interactive={this.state.interact} required/> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 style={{textAlign: 'right'}}>Helpfulness </h5>
                                                </div>
                                                <div className="col">
                                                    <div><Rater total={5} onRate={this.rateTwo} rating={this.state.rateTwoTemp} interactive={this.state.interact} required/> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 style={{textAlign: 'right'}}>Clarity </h5>
                                                </div>
                                                <div className="col">
                                                    <div><Rater total={5} onRate={this.rateThree} rating={this.state.rateThreeTemp} interactive={this.state.interact} required/> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 style={{textAlign: 'right'}}>WorkLoad </h5>
                                                </div>
                                                <div className="col">
                                                <div><Rater total={5} onRate={this.rateFour} rating={this.state.rateFourTemp} interactive={this.state.interact} required/> </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 style={{textAlign: 'right'}}>Grading </h5>
                                                </div>
                                                <div className="col">
                                                    <div><Rater total={5} onRate={this.rateFive} rating={this.state.rateFiveTemp} interactive={this.state.interact} required/> </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* this is for the commenting in textarea */}
                                        <textarea className="commentTag" type="text" name="comment"
                                            value={comment} onChange={this.formChange}
                                            placeholder="Rating goes as (1) Negative to (5) Positive. &#10;Comment of Min (15) and Max (1000) characters goes here."
                                            
                                        >
                                        </textarea>

                                        {/* this makes sure that every field in the form has been touched or filled out in order for the submit button to be enabled */}
                                        {((this.state.rateOneTemp > 0) && (this.state.rateTwoTemp > 0) && (this.state.rateThreeTemp > 0) && (this.state.rateFourTemp > 0) && 
                                        (this.state.rateFiveTemp > 0) && (this.state.comment.length > 15) && (this.state.btnDisable===true)) 
                                        ? this.ratingAndCommentComplete() : null}

                                    </form>
                                </div>
                                </div>
                                {/* two buttons in the pop up menu, where one is for closing the form and other is submitting the form */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={this.submitReviewForm} disabled={this.state.btnDisable}>Submit</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Col>
                    </div>
                <hr/>    
                </div>

                <br/>                

                {/* This displays the comments made by the users by mapping the byProf array */}
                <div className="displayComment">
                    {
                    byProf.map((userList) => (
                        <div key={userList.id}>
                            <h5> {userList.crsSubjCd}&nbsp;{userList.crsNbr}<small style={{fontSize: '15px'}}><i> - Posted on {userList.datePosted} </i></small></h5>
                            <p style={{fontWeight: 'bold'}}> Easiness&nbsp; <Rater total={5} rating={userList.easinessRating} interactive={false}/>
                                &nbsp;Helpfulness&nbsp; <Rater total={5} rating={userList.helpfulnessRating} interactive={false}/>
                                &nbsp;Clarity&nbsp; <Rater total={5} rating={userList.clarityRating} interactive={false}/>
                                &nbsp;Workload&nbsp; <Rater total={5} rating={userList.workloadRating} interactive={false}/>
                                &nbsp;Grading&nbsp; <Rater total={5} rating={userList.gradingRating} interactive={false}/> 
                            </p>
                            <p>{userList.userComment}</p>
                        <hr/>    
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }
}
    
export default CommentProf;
