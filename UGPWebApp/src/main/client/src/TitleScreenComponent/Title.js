import React, { Component } from 'react';
import "./assets/css/main.css"
import pic01 from "./images/pic01.jpg"
import Logo from '../GradePal.png'
import {Link} from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            email: '',
            message: ''
        };
        this.submitContactForm = this.submitContactForm.bind(this);
        this.formChange = this.formChange.bind(this);
    }

    // when user fills the form and submits, it will post the name, message, and email to the /signup-success (backend) which will send email to us and the user
    submitContactForm = event => {
        event.preventDefault();

        // stores the info that was filled out into name, message, and email which is declared in the backend user file
        const info = {
            name: this.state.name,
            message: this.state.message,
            email: this.state.email
        };
        
        // posts info to the backend with that url
        axios.post("http://localhost:8080/postgressApp/signup-success", info)
            .then(response => {
                if(response.data != null) {
                    this.setState({show:true});
                    setTimeout(() => this.setState({show:false}), 3000);
                    window.location.reload();
                } else {
                    this.setState({show:false});
                }
            });
    }

    // updates the form field with the characters that are being writen by the user
    formChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        var today = new Date();

        var year = today.getFullYear();
        return (
            <div>
                {/* adds the scrollToTop button */}
                <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
                <head>
                    <title>GradePal</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="stylesheet" href="assets/css/main.css" />
                </head>
                
                <body className="is-preload">

                        <div id="header">
                        
                        <img className="logo" src={Logo} alt="logo" />  
                            
                        </div>

                        <div id="main">

                            <header className="major container medium">
                                <h2>Check out how your&nbsp;
                                <br />
                                fellow peers are performing&nbsp;
                                <br />
                                in hundreds of courses</h2>					
                            </header>

                            {/* Different containers that are button type which allow the users to choose between 3 options */}
                            <div className="box alt container">
                                {/* link to displayDept */}
                                <section className="feature left">
                                    <Link to={{pathname: "/displayDept"}} className="image icon solid fa-university"><img src={pic01} alt="pic01" /></Link>
                                    <div className="content">
                                        <h3>Courses by Department</h3>
                                    </div>
                                </section>
                                {/* link to displayAllProfessor that have taught at uic for past 3 years */}
                                <section className="feature right">
                                <Link to={{pathname: "/displayAllProfessors"}} className="image icon solid fa-user-tie"><img src={pic01} alt="pic01" /></Link>
                                    <div className="content">
                                        <h3>Check out Professors</h3>
                                    </div>
                                </section>
                                {/* link to genEd cateogies that UIC offers and list of those courses in that genEd */}
                                <section className="feature left">
                                    <Link to={{pathname: "/displayGenEd"}} className="image icon solid fa-book-open"><img src={pic01} alt="pic01" /></Link>
                                    <div className="content">
                                        <h3>General Ed. Courses</h3>
                                    </div>
                                </section>
                            </div>

                            {/* Links to About us page */}
                            <footer class="major container medium">
                            <h3>About Us</h3>
                            <strong><p>Find out more about our journey into creating this website for fellow students.</p></strong>
                            <ul class="actions special">
                                <li><Link to={{pathname: "/aboutUs"}} class="button">Learn More</Link></li>
                            </ul>
                            </footer>
                        </div>

                        <div id="footer">
                            <div className="container medium">
                                
                                {/* form for the users to send us comments/questions */}
                                <header className="major last">
                                    <h2 id="contact">Questions or comments?</h2>
                                </header>
                                
                                <p>Feedback, bug reports, and comments are not only welcome, but strongly encouraged <i class="far fa-smile-beam"></i></p>

                                {/* form starts here and calls submitContactForm when submit pressed */}
                                <form onSubmit={this.submitContactForm}>
                                    <div className="row">
                                        <div className="col-6 col-12-mobilep">
                                            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.formChange}/>
                                        </div>
                                        <div className="col-6 col-12-mobilep">
                                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.formChange}/>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="Message" rows="6" value={this.state.message} onChange={this.formChange}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions special">
                                                <li><input type="submit" value="Send Message" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                
                                {/* social media icons */}
                                <ul className="icons">
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="https://www.twitter.com/share?url=https://www.google.com/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="http://www.reddit.com/submit?url=https://www.google.com/" className="icon brands fa-reddit-alien"><span className="label">Reddit</span></a></li>
                                    <li><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.google.com/" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                                </ul>

                                <ul className="copyright">
                                    <li>&copy; {year} GradePal. All rights reserved.</li>
                                </ul>

                            </div>
                        </div>

                        <script src="assets/js/jquery.min.js"></script>
                        <script src="assets/js/browser.min.js"></script>
                        <script src="assets/js/breakpoints.min.js"></script>
                        <script src="assets/js/util.js"></script>
                        <script src="assets/js/main.js"></script>

                </body>
            </div>
        )
    }
}

export default Title