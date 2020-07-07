import React, { Component } from 'react';
import Logo from './GradePal.png'
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
                            Bring data into students lives by making it easier to digest with 
                            visual graphs and a simple navigation system.
                        </blockquote>
						<p>
                        Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.
                        <hr />
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p>
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
                                    <h3>Ansar Khan <i className="fab fa-linkedin"></i></h3>
                                </header>
                                {/* <p>ansarkhan0625@gmail.com</p> */}
                                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
                                {/* <footer>
                                    <a href="#" class="button special">More</a>
                                </footer> */}
                            </article>
                            <article>
                                <header>
                                    <h3>Qasim Mir <i className="fab fa-linkedin"></i></h3>
                                </header>
                                {/* <p>qmir23@gmail.com</p> */}
                                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
                                {/* <footer>
                                    <a href="#" class="button special">More</a>
                                </footer> */}
                            </article>
                            <article>
                                <header>
                                    <h3>Shalin Patel <i className="fab fa-linkedin"></i></h3>
                                </header>
                                {/* <p>shalinp2000@gmail.com</p> */}
                                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
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
