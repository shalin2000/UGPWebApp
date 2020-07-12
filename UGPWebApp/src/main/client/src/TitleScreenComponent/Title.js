import React, { Component } from 'react';
import "./assets/css/main.css"
import pic01 from "./images/pic01.jpg"
import pic02 from "./images/pic02.jpg"
import pic03 from "./images/pic03.jpg"
// import Logo from '../miniLogo.png'
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
    }

    submitBook = event => {
        event.preventDefault();

        const info = {
            name: this.state.name,
            message: this.state.message,
            email: this.state.email
        };
        
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

    bookChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        var today = new Date();

        var year = today.getFullYear();
        return (
            <div>
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
                            {/* <h1>UIC GradePal</h1>
                            <p>Easy Scheduling.</p> */}
                        </div>

                        <div id="main">

                            <header className="major container medium">
                                <h2>Check out how your 
                                <br />
                                fellow peers perform
                                <br />
                                in hundreds of courses</h2>					
                            </header>

                            <div className="box alt container">
                                <section className="feature left">
                                    <Link to={{pathname: "/displayDept"}} className="image icon solid fa-university"><img src={pic01} alt="pic01" /></Link>
                                    <div className="content">
                                        <h3>Courses by Department</h3>
                                    </div>
                                </section>
                                <section className="feature right">
                                <Link to={{pathname: "/displayAllProfessors"}} className="image icon solid fa-user-tie"><img src={pic02} alt="pic02" /></Link>
                                    <div className="content">
                                        <h3>Check out Professors</h3>
                                    </div>
                                </section>
                                <section className="feature left">
                                    <Link to={{pathname: "/displayGenEd"}} className="image icon solid fa-book-open"><img src={pic03} alt="pic03" /></Link>
                                    <div className="content">
                                        <h3>General Ed. Courses</h3>
                                    </div>
                                </section>
                            </div>

                            <footer class="major container medium">
                            <h3>About Us</h3>
                            <p>Find out our journey into creating this website for fellow students.</p>
                            <ul class="actions special">
                                <li><Link to={{pathname: "/aboutUs"}} class="button">Learn More</Link></li>
                            </ul>
                            </footer>
                        </div>

                        <div id="footer">
                            <div className="container medium">

                                <header className="major last">
                                    <h2>Questions or comments?</h2>
                                </header>

                                <p>Feedback, bug reports, and comments are not only welcome, but strongly encouraged <i class="far fa-smile-beam"></i></p>

                                <form onSubmit={this.submitBook}>
                                    <div className="row">
                                        <div className="col-6 col-12-mobilep">
                                            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.bookChange}/>
                                        </div>
                                        <div className="col-6 col-12-mobilep">
                                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.bookChange}/>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="Message" rows="6" value={this.state.message} onChange={this.bookChange}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions special">
                                                <li><input type="submit" value="Send Message" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>

                                <ul className="icons">
                                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                                    <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                                </ul>

                                <ul className="copyright">
                                    <li>&copy; {year} GradePal. All rights reserved.</li>
                                    {/* </li><li>Design: <a href="http://html5up.net">HTML5 UP</a> */}
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