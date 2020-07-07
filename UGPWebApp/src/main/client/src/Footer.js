import React, { Component } from 'react';
import Logo from './logoImage.png';
import {Link} from 'react-router-dom';
import './Footer.css'

class Footer extends Component {

    render(){
        return(
           
                <footer className="site-footer">
                    <div className="container">
                        <br/>
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
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
        )
    }
}

export default Footer