import image from "../../assets/img/Image-8.png";
import card from "../../assets/img/MaskGroup-1@2x.png";
import { ReactComponent as Cursor } from "../../assets/img/Group-168.svg";
import { ReactComponent as Friends } from "../../assets/img/Group-171.svg";
import { ReactComponent as Edit } from "../../assets/img/Group-169.svg";
import { ReactComponent as Rectangle } from "../../assets/img/Rectangle-2copy.svg";
import { ReactComponent as Arrow } from "../../assets/img/Path-92.svg";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import { ReactComponent as More } from "../../assets/img/Group-12.svg";
import "./StyleCandidate.css";

const Candidate = () => {
    return(
<>
        
    <div>
        <Navbar2/>
        <section>
            <h1 className="head">
                Your career is in <br/>
                excellent hands
            </h1>
            <p className="content">Whether you’re looking for a permanent or temporary role, 
                the personalised support from our<br/> dedicated recruitment experts 
                will help you to exceed your career goals. As a leading provider in <br/> the UK healthcare 
                staffing market, you’ll benefit from our reputation for the highest standards of <br/>  quality and compliance,
                 as we share your commitment to compassionate care.</p>

            <button className="non-clinical">Non clinical</button>
            <button className="clinical">clinical</button>
            <section className="picture">
                <img src={image} alt="candidate" />
            </section>
        </section>

        <h1 className="title-2">Why join ramsy?</h1>
        <section id="dishes">
            <div class="container">
                <div class="row ">
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Rewards & benefits</p>
                                <p class="card-text">You’ll receive a range of excellent rewards and recognition for your hard work.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Training</p>
                                <p class="card-text">You’ll be given expert training, support and advice to ensure you progress in your career.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Compliance</p>
                                <p class="card-text">Benefit from our reputation for commitment to the highest standards of quality and compliance.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Featured clients</p>
                                <p class="card-text">We work with most prestigious clients healthcare.You could too by working with one of our featured clients.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Revalidation</p>
                                <p class="card-text">Our support team is on hand to help you with appraisal and revalidation activities.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">ipoint</p>
                                <p class="card-text">Our app makes it effortless to manage your career on the go. See what it could do for you.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">News and insights</p>
                                <p class="card-text">Keep up to date on the latest news in healthcare, with articles relevant to every profession</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                        <img className="card-image" src={card} alt="card4"/>
                            <div class="card-block">
                                <p class="card-title">Read our FAQs</p>
                                <p class="card-text">We’ve compiled the most frequently asked questions to give you the answers you need.</p>
                                <div className="more-button">
                                    <More/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>  

        <section id ="cards-3">
            <div class="row">
                <div class="col-md-4 py-3 py-md-0">
                    <div className="first-card">
                    <div class="card">
                        <h3 class="card-3-title">Quick Register</h3>
                        <div className="card-image">
                            <Cursor/>
                        </div>
                        <div class="card-body">
                            <p class="card-3-text">Register your interest or apply for a vacancy.We’ll <br/> Get in touch to explore your work preferences.</p>
                        </div>
                        <div className="rectangle"><Rectangle/></div>
                        <div className="arrow"><Arrow/><p>Register Now</p></div>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 py-3 py-md-0">
                <div className="second-card">
                    <div class="card">
                        <h3 class="card-3-title">Refer a Friend</h3>
                        <div className="card-image">
                            <Friends/>
                        </div>
                        <div class="card-body">
                            <p class="card-3-text">Refer your friends to us and receive a bonus<br/> From Ramsy Health care.</p>
                        </div>
                        <div className="rectangle"><Rectangle/></div>
                        <div className="arrow"><Arrow/><p>Refer Friend</p></div>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 py-3 py-md-0">
                    <div className="thrid-card">
                    <div class="card">
                        <h3 class="card-3-title">Job Creator</h3>
                        <div className="card-image">
                            <Edit/>
                        </div>
                        <div class="card-body">
                            <p class="card-3-text">Tell us what you are looking for and we will<br/> Build an agency for job package  that suits you<br/> Perfectly.</p>
                        </div>
                        <div className="rectangle"><Rectangle/></div>
                        <div className="arrow"><Arrow/><p>Create Your Job</p></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <Footer/>
        </section>
    </div>
</>
    )
}

export default Candidate;