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
                <Header/>
                <header className="major container medium">
                    <h2>About GradePal</h2>
                </header>
                <div className='About'>
                    <section>
                        <blockquote>
                            Ease up every semester's scheduling for students by creating a virtual hub for them to 
                            research about any course or professor and how former students of these courses did in the past.
                        </blockquote>
                        <p> 
                            We anticipated the summer of 2020 to be an exciting stage of our careers as we hoped to land an internship and start working on real life projects to gain some valuable experience. However, due to the unforeseen circumstances of COVID-19, we were left with having to shift gears in a different direction. So, we decided to become a team and work on an impactful project that would not only be useful for us but others. Thus, the idea of GradePal was originated.
                        </p>
                        <hr />
                        <p>
                            As students, we do our due diligence before registering for any course for an upcoming semester. 
                            Although UIC has a grade distribution website of its own, interacting with it is overly intricate. 
                            For very reason, we wanted to create an application which will be beneficial for any UIC student to do 
                            their research for any course or a professor. Whether that be by simply filtering geneds by credit hours 
                            or by leaving reviews for professors for other students to read.
                        </p>
                    </section>
                </div>
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
                                    <h3>Ansar Khan&nbsp; 
                                        <a href="mailto:ansarkhan0625@gmail.com"><i className="fas fa-envelope"></i></a>&nbsp;
                                        <a href="https://www.linkedin.com/in/mk5040"><i className="fab fa-linkedin"></i></a>
                                    </h3>
                                </header>
                            </article>
                            <article>
                                <header>
                                    <h3>Qasim Mir&nbsp; 
                                        <a href="mailto:qmir23@gmail.com"><i className="fas fa-envelope"></i></a>&nbsp;
                                        <a href="https://www.linkedin.com/in/qmir23"><i className="fab fa-linkedin"></i></a>
                                    </h3>
                                </header>
                            </article>
                            <article>
                                <header>
                                    <h3>Shalin Patel&nbsp; 
                                        <a href="mailto:shalinp2000@gmail.com"><i className="fas fa-envelope"></i></a>&nbsp;
                                        <a href="https://www.linkedin.com/in/shalinp2000"><i className="fab fa-linkedin"></i></a>
                                    </h3>
                                </header>
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
