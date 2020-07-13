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
                        Ourselves, as being students do some intense research before registering for any courses for an upcoming semester. We wanted to make an application and utilize its features to make our and other student's research easier and effortless. Although UIC has a grade distribution website of it's own, it is overly intricate to interact with. For very reason, we wanted to create an application which will be useful for any UIC college student to do their research for any course.
                        {/* <hr />
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p> */}
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
