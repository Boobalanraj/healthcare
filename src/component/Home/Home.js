import Doctor from '../../assets/img/doctor.png';
import Candidate from '../../assets/img/Group-1771@2x.png';
import Client from '../../assets/img/Group-1772@2x.png';
import UploadCV from '../../assets/img/Group-5.png';
import Doctor2 from '../../assets/img/Image-2.png';
import quotation from '../../assets/img/Group-21.png';
import preview from '../../assets/img/Group-19.png';
import person1 from '../../assets/img/Group-56.png';
import person2 from '../../assets/img/Group-57.png';
import person3 from '../../assets/img/Group-55.png';
import cqc1 from '../../assets/img/Image-01.png';
import cqc2 from '../../assets/img/Image-02.png';
import cqc3 from '../../assets/img/Image-03.png';
import cqc4 from '../../assets/img/Image-04.png';
import cqc5 from '../../assets/img/Image-05.png';
import cqc6 from '../../assets/img/Image-06.png';
import cqc7 from '../../assets/img/Image-07.png';
import cqc8 from '../../assets/img/Image-08.png';
import tiles from '../../assets/img/Group-25.png';
import robot from '../../assets/img/Image-6.png';
import tiles2 from '../../assets/img/Group-26.png';
import { ReactComponent as Search } from '../../assets/img/Group-2.svg';
import { ReactComponent as Cursor } from "../../assets/img/Group-168.svg";
import { ReactComponent as Friends } from "../../assets/img/Group-171.svg";
import { ReactComponent as Edit } from "../../assets/img/Group-169.svg";
import { ReactComponent as Rectangle } from "../../assets/img/Rectangle-2copy.svg";
import { ReactComponent as Arrow } from "../../assets/img/Path-92.svg";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './home.css'

const Home = () => {
    
    return(
        <><Navbar />
        <div className='picture'>
            <section className='banner'>
                <img src={Doctor} alt='doctor'></img>
                <h1 className='title'>Empowering cretors<br/>and elevating ideas</h1>
                <h4 className='sub-title'>Browse 5000 Permanent & Contract Jobs</h4>
                <img className="candidate" src={Candidate} alt='button' />
                <img className="candidate" src={Candidate} alt='button' />
                <img className="client" src={Client} alt='button' />
                <p className='login'>Login</p>
            </section>
         
                <div className='home-section-2'>
                    <h1 className='home-title'>Register to receive job alerts</h1>
                    <p className='home-content'>Consider how much easier it would be if securing your next role was simply a couple of clicks away. That once registered, you only ever<br/> hear about jobs that tick every box. Where you can relax and even enjoy the process. At ramsy, we pair our candidates with roles we<br/> know are a direct match to their skills, knowledge, experience and future aspirations.​ Upload your CV to get started!</p>
                    <img className='home-CV' src={UploadCV} alt='CV' />
                </div>

                <div className='home-section-3'>
                    <h1 className='home-title' >Looking for Job?</h1>
                    <p className='home-content'>Search the ramsyhealthcare website for specific pages, resources, blogs or jobs.</p>
                    <hr className='home-line' />
                    <div className='home-search'>
                        <Search/>
                    </div>
                </div>
            
                <div className='home-section-4'>
                        <h1 className='home-title'>Why Ramsy Healthcare?</h1>
                        <p className='home-content'>At Ramsy Health Care Ltd, we are dedicated to delivering<br/>
                        exceptional community and domiciliary care support services to<br/>
                        our clients. Our highly trained workforce is committed to providing<br/>
                        compassionate care that upholds the dignity of our service users<br/>
                        while promoting their independence and freedom of choice.
                    </p>
                    <img className='home-image' src={Doctor2} alt='Doctor2' />
                    <button className='home-button'>Find out More</button>
                    <p className='home-text'>Privacy | Dignity | Independence | Security | Choice</p>
                </div>

                <div className='home-section-5'>
                <section id='cards-3' class="container">
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
            </div>

            <div className='home-section-6'>
                <img className='home-image' src={quotation} alt='quotation'/>
                <h1 className='home-title'>What Our Customers Are Saying</h1>
                <p className='home-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum<br/>
                 has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the<br/>
                 printing and typesetting industry. Lorem Ipsum</p>
                 <img className='home-preview' src={preview} alt='preview' />
                 <img className='home-next' src={preview} alt='next' />
                 <img className='home-person-1' src={person1} alt='person' />
                 <img className='home-person-2' src={person2} alt='person' />
                 <img className='home-person-3' src={person3} alt='person' />
                 <h4 className='sub-title'>Lorem Ipsum</h4>
                 <p className='sub-content'>Lorem Ipsum</p>
            </div>

            <div className='home-section-7'>
                <h1 className='home-title'>We are fully registered with<br/> Care Quality Commission (CQC)</h1>
                <p className='home-content'>We are providing care services in the following boroughs:</p>
                <div className='container'>
                    <div class="row">
                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image1' src={cqc1} alt='cqc1'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image2' src={cqc2} alt='cqc2'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image3' src={cqc3} alt='cqc3'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image5' src={cqc5} alt='cqc5'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image4' src={cqc4} alt='cqc4'/> 
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image6' src={cqc6} alt='cqc6'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image7' src={cqc7} alt='cqc7'/>
                    </div>

                    <div class="col-md-3 py-3 py-md-0">
                    <img className='cqc-image8' src={cqc8} alt='cqc8'/>
                    </div>
                </div>
            </div>
            <button className='home-button'>Show More</button>
        </div>

        <div className='home-section-8'>
            <img className='home-tiles' src={tiles} alt='tiles' />
            <img className='home-robot' src={robot} alt='robot' />
            <img className='home-tiles2' src={tiles2} alt='tiles2' />
        </div>

        <div className='home-section-9'>
            <Footer/>
        </div>

        </div></>
    )
}

export default Home;