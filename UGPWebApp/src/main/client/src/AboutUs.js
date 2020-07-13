import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutUs.css'

class About_Us extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className='App'>
                < Header />
                    <br/> 
                    
					<header className="major container medium">
						<h2>About GradePal</h2>
					</header>

                    {/* <div class="box container"> */}
                    <div className='About'>
					<section>
						{/* <header>
							<h3>Paragraph</h3>
							<p>This is the subtitle for this particular heading</p>
						</header> */}
                        <blockquote>
                            To ease up every semester's course scheduling for students by creating a virtual hub for them to research about any course or professor and how former students did in those courses
                        </blockquote>
						<p>
                        Ourselves, as being students do some intense research before registering for any course for an upcoming semester. We wanted to make an application and utilize its features to make our and other student's research easier and effortless. Although UIC has a grade distribution website of it's own, it is overly intricate to interact with. For very reason, we wanted to create an application which will be useful for any UIC student to do their research for any course or a professor.
                        <hr />
						<p>We expected the summer of 2020 to be a thrilling stage of our careers as we were hoping to land on an internship as we were exhilarated to obtain some valuable experience by working on a real life project. However, due to the the unforseen circumstances of COVID-19, it has been dificult to hear from companies about them cancelling their internship programs for the summer-2020. Despite that, we wanted to do work on a project and learn new set of skills and give our careers a headstart and thus we decided to learn and create this Web Application </p>
                            {/* Students should know how their fellow peers 
                        perform for any given course in a given semester based on a specific professor.  */}
                        </p>
					</section>
                    </div>

                    <br/>
                    <br/>

                    <header className="major container medium">
                                <h2>Our Team</h2>					
                    </header>
                    
                    
                    {/* TEAM ABOUT */}
                    <div className='About'>
                    <section id="one" class="wrapper">
                    <div class="inner">
                        <div class="flex flex-3">
                            <article>
                                <header>
                                    <h3>Ansar Khan <a href="https://www.linkedin.com/in/mk5040"><i className="fab fa-linkedin fa-1.5x"></i></a></h3>
                                </header>
                                {/* <p>ansarkhan0625@gmail.com</p> */}
                                <p>Senior Computer Science studenT at University of illinois at Chicago looking to utilize from among the set of various skills of Web development and Software development that I possess, to pursue  an auspicious career as a Developer</p>
                                {/* <footer>
                                    <a href="#" class="button special">More</a>
                                </footer> */}
                            </article>
                            <article>
                                <header>
                                    <h3>Qasim Mir <a href="https://www.linkedin.com/in/qmir23"><i className="fab fa-linkedin fa-1.5x"></i></a></h3>
                                </header>
                                {/* <p>qmir23@gmail.com</p> */}
                                <p>Junior Computer Science student interested in utilizing prior programming experience towards an internship. Experience in event driven programming, multi-threading, GUI design and data structures. Interested in learning UI design, development, data analysis and other advanced languages.</p>
                                {/* <footer>
                                    <a href="#" class="button special">More</a>
                                </footer> */}
                            </article>
                            <article>
                                <header>
                                    <h3>Shalin Patel <a href="https://www.linkedin.com/in/shalinp2000"><i className="fab fa-linkedin fa-1.5x"></i></a></h3>
                                </header>
                                {/* <p>shalinp2000@gmail.com</p> */}
                                <p>Pursuing a Bachelor’s in Computer Science and seeking for an internship. Passionate about educating others and myself with new technologies and always looking for opportunities to increase knowledge. Looking forward to joining a team and making use of my skills / knowledge to obtain hands on experience. </p>
                                {/* <footer>
                                    <a href="#" class="button special">More</a>
                                </footer> */}
                            </article>
                        </div>
                    </div>
                    </section>
                    </div>

				                  
                <Footer/>
                
            </div>
        )
    }
}

export default About_Us
