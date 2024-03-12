import './FooterStyle.css';
import location from '../../assets/img/Group-43@2x.png';
import call from '../../assets/img/Group-41@2x.png';
import mail from '../../assets/img/Group-37@2x.png';
import logo from '../../assets/img/Logo@2x.png';
import logo_2 from '../../assets/img/Logo_01.png';

function Footer() {

    return(
            <footer class="footer">
                <div class="footer-container">
                    <img className="logo" src={logo} alt="logo"/>
                    <div class="row">
                        <div class="footer-col">
                           <ul>
                            <h4>Who We are</h4>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Modern Slavery</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <ul>
                            <h4>Recruitment</h4>
                                <li><a href="#">Jobs & Vacancies</a></li>
                                <li><a href="#">Login & Signup</a></li>
                                <li><a href="#">Job Dashboard</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <ul>
                            <h4>Contact Us</h4>
                            <address>
                                <img className="location" src={location} alt="location" />&nbsp;
                                422 High Street North, London E12 6RH, UK<br/>
                                <img className="call" src={call} alt="call" />
                                <a href="tel:+442035001100" className="contact-text" >&nbsp;+44 (0)20 3500 1100 Mon-Fri: 9am-6pm</a><br/>
                                <img className="mail" src={mail} alt="mail" />
                                <a href="mailto:info@ramsyhealthcare.com" className="contact-text" >&nbsp;&nbsp;info@ramsyhealthcare.com</a><br/>
                                <div className="social-links">
                                    <a href="#" ><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" ><i class="fab fa-instagram"></i></a>
                                    <a href="#" ><i class="fab fa-twitter"></i></a>
                                </div>
                            </address>
                            </ul>
                        </div>
                    </div>
                    <div className="second-logo" >
                        <img src={logo_2} alt="logo"/>
                </div>
                </div>
                <hr className="line" />
                
                <div class="footer-legal">
                    <p>&copy; Copyright 2023 Ramsy Health Care Ltd. All rights reserved.</p>
                </div>
            </footer>

    )
}


export default Footer;