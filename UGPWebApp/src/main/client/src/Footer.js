import React, { Component } from 'react';
import './Footer.css'
import ScrollUpButton from "react-scroll-up-button";

class Footer extends Component {

    render(){
        var today = new Date();

        var year = today.getFullYear();
        return(
            <div>
            <footer className="site-footer">
                <div className="container">
                    <br/>
                    <p className="copyright-text">Copyright &copy; {year} All Rights Reserved by GradePal.</p>  
                    <hr/>
                    <ul className="row" style={{justifyContent: "center"}}>
                        <li><a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/" target="_blank"><i className="fab fa-facebook fa-2x"></i></a></li>
                        <li><a class="twitter" href="https://www.twitter.com/share?url=https://www.google.com/" target="_blank"><i className="fab fa-twitter fa-2x"></i></a></li>
                        <li><a class="reddit" href="http://www.reddit.com/submit?url=https://www.google.com/" target="_blank"><i className="fab fa-reddit-alien fa-2x"></i></a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.google.com/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>  
                    </ul>
                </div>
            </footer>
            <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
            </div>
        )
    }
}

export default Footer