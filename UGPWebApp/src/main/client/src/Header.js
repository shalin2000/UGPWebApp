import React, { Component} from 'react';
import Logo from './GradePal.png';
import './header.css';
import {Link} from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'

class Header extends Component {
    render(){
        return(
            <div className="header"> 
            <Menu>
                <Link to={{pathname: "/"}} className="menu-item"> <i className="fa fa-home fa-fw" aria-hidden="true"/>&nbsp; Home </Link>

                <Link to={{pathname: "/displayDept"}} className="menu-item"> <i className="fa fa-university fa-fw" aria-hidden="true"/>&nbsp; Departments </Link>

                <Link to={{pathname: "/displayAllProfessors"}} className="menu-item"> <i className="fa fa-user-tie fa-fw" aria-hidden="true"/>&nbsp; Professors </Link>

                <Link to={{pathname: "/displayGenEd"}} className="menu-item"> <i className="fa fa-book fa-fw" aria-hidden="true"/>&nbsp; Gen Education </Link>

                <Link to={{pathname: "/aboutUs"}} className="menu-item"> <i className="fa fa-address-card fa-fw" aria-hidden="true"/>&nbsp; About </Link>
                
                <a href="/#contact" className="menu-item" > <i className="fa fa-envelope-open-text fa-fw" aria-hidden="true"/>&nbsp; Contact</a>
                
            </Menu>
            <div className="logoAlignment"> 
            <Link to={{pathname: "/"}}>
                <img className="logo" src={Logo} alt="logo" />
            </Link>
            <hr/>
            </div>
            </div>
        )
    }
}

export default Header