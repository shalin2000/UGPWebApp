import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DisplayDept from "./DisplayDept";
import DisplayCourse from "./DisplayCourse";
import DisplayProfessor from "./DisplayProfessor";
import DisplayAllProfs from "./DisplayAllProfs"
import ListCRSbyProf from "./ListCRSbyProf"
import DisplayGrades from "./DisplayGrades";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import Title from "./TitleScreenComponent/Title";
import DisplayGenEd from "./GenEdComponent/DisplayGenEd";
import DisplayGenEdCourses from "./GenEdComponent/DisplayGenEdCourses";

class RoutePath extends Component {
    
    render(){
        return (
            <Router>
                <Switch>
                    {/* default/home page. */}
                    <Route exact path="/" component={Title} />
                    {/* list of GenEd */}
                    <Route exact path="/displayGenEd" component={DisplayGenEd} />
                    {/* list of the GenEd courses */}
                    <Route exact path="/displayGenEdCourses" component={DisplayGenEdCourses} />
                    {/* list of dept in alphabetical order */}
                    <Route exact path="/displayDept" component={DisplayDept} />
                    {/* page with courses from a specific dept */}
                    <Route exact path="/displayCourse" component={DisplayCourse} />
                    {/* page with courses from a specific professor */}
                    <Route exact path="/displayProfessor" component={DisplayProfessor} />
                    <Route exact path="/displayAllProfessors" component={DisplayAllProfs} />
                    <Route exact path="/displayCRSbyProf" component={ListCRSbyProf} />
                    <Route exact path="/aboutUs" component={AboutUs} />
                    {/* page with Grades for a specific Course Professor*/}
                    <Route exact path="/displayGrades" component={DisplayGrades} />
                    <Route exact path="/404" component={NotFound} />
                    <Redirect to="/404" /> 
                </Switch>
                
                
            </Router>
        )
    }
}

export default RoutePath;