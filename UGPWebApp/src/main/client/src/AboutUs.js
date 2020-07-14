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
                <br/>
                <header className="major container medium">
                    <h2>About GradePal</h2>
                </header>
                <div className='About'>
                    <section>
                        <blockquote>
                            <strong>Mission Statement:</strong> To provide UIC students with an intuitive platform to conduct research on available courses, acquire digestible information on past grading histories, and plan out their future schedules conveniently.
                        </blockquote>
                        <p> 
                            As we wrapped up our junior year, our team anticipated the summer of 2020 to be an exciting new stage for our careers. 
                            We were actively applying for internships and hoped to develop as professionals by gaining valuable real-world experience. However, due to the unforeseen 
                            circumstances of COVID-19, we decided to shift gears and work on an impactful project ourselves as a team.
                            This lead to the idea of GradePal, a service intended to revolutionize course selection for UIC students. 
                        </p>
                        <hr />
                        <p>
                            As students, we do our due diligence before registering for any course for an upcoming semester. 
                            Although UIC has a grade distribution website of its own, interacting with it is unintuitive for users. 
                            For this very reason, we wanted to create an application which will be beneficial for any UIC student to do 
                            their research for any course or a professor. Whether that be by simply filtering geneds by credit hours 
                            or by leaving reviews for professors for other students to read. 
                        </p>
                        <hr />
                        <p>
                            We hope our website will have a positive impact, 
                            not just by assisting with our professional development, but by giving a positive user experience to every future 
                            student who takes advantage of this service.
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
