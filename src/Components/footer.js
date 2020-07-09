import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faThumbsUp, faBasketballBall, faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const Footer = () => {
    return(
        <div className="container-fluid p-0">
            <footer className="site-footer">
                <div className="container p-0">
                    <div className="row mr-auto">
                        <div className="col-sm-12 col-md-6">
                            <div className="text-justify"><h4>SolveMeThis</h4>  Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua.
                            <br /><br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/">Drama</a></li>
                                <li><a href="/">UI Design</a></li>
                                <li><a href="/">PHP</a></li>
                                <li><a href="/">Java</a></li>
                                <li><a href="/">Android</a></li>
                                <li><a href="/">Templates</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Contribute</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container p-0">
                    <div className="row mr-auto">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="/"> Usama Saleem</a>.
                            </p>
                        </div>
                        
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><FontAwesomeIcon icon={faAddressBook}/></a></li>
                                <li><a className="twitter" href="/"><FontAwesomeIcon icon={faThumbsUp}/></a></li>
                                <li><a className="dribbble" href="/"><FontAwesomeIcon icon={faBasketballBall}/></a></li>
                                <li><a className="linkedin" href="/"><FontAwesomeIcon icon={faVolleyballBall}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;