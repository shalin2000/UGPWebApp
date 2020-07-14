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
                            <strong>Mission Statement:</strong> To provide UIC students with an intuitive platform to learn more about their instructors, conduct research on prior course records, and gather the information they need to plan their future schedules conveniently.
                        </blockquote>
                        <p> 
                            As we wrapped up our school year, our team anticipated that summer 2020 would be an exciting new stage for our careers. 
                            We were actively seeking internships and hoping to develop our professional skillsets by gaining valuable real-world experience. However, the unforeseen 
                            circumstances of COVID-19 resulted in a change of plans. We decided to shift gears and work on an impactful project ourselves as a team.
                            This lead to the idea of GradePal, a service intended to revolutionize course selection and research for UIC students. 
                        </p>
                        <hr />
                        <p>
                            Most UIC students prefer to do their due diligence before registering for any courses for an upcoming semester. 
                            Although UIC has their own grade distribution website of its own, many current students have found it to be unintuitive to navigate. 
                            For this very reason, we wanted to create an application which would help UIC students learn about their courses and instructors easily and efficiently.
                        </p>
                        <hr />
                        <p>
                            We hope our website will have a positive impact, 
                            not just by assisting us with our professional development, but by providing a positive user experience to everyone 
                            who takes advantage of this service.
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
