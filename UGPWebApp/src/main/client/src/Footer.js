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
                    <p className="copyright-text">Copyright &copy; {year} All Rights Reserved by 
                    <a href="#"> GradePal</a>.
                    </p> 
                    <hr/>
                    <ul className="row" style={{justifyContent: "center"}}>
                    <li><a class="facebook" href="#"><i className="fab fa-facebook fa-2x"></i></a></li>
                    <li><a class="twitter" href="#"><i className="fab fa-twitter fa-2x"></i></a></li>
                    <li><a class="instagram" href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
                    <li><a class="linkedin" href="#"><i className="fab fa-linkedin fa-2x"></i></a></li>  
                    </ul>
        
                </div>
            </footer>
            <ScrollUpButton style={{ outline:'none', backgroundColor: '#AC1E2D', borderRadius: '8px', padding: '4px',}}/>
            </div>
        )
    }
}

export default Footer