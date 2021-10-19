import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faHome, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faGithub, faPinterest, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-4">
            <footer className="text-center text-lg-start text-white">
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-4 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">
                                    Dr Moyna mia medical center
                                </h6>
                                <p>
                                    Dr Moyna mia medical center adds yet another feather in its ornate cap - Dr Moyna mia medical center commissioned on 2012. A new era in the field of care is dawned, a new chapter opened.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 mx-auto mt-3 quick-link">
                                <h6 className="text-uppercase mb-4 fw-bold">Quick Links</h6>
                                <p>
                                    <NavLink className="navlink" to='/home'>Home</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink" to='/about'>About US</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink" to='/services'>Services</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink" to='/doctors'>Doctors</NavLink>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                                <p><FontAwesomeIcon icon={faHome} /> College Road Chargachh 3460</p>
                                <p><FontAwesomeIcon icon={faEnvelopeOpen} /> moynamia@gmedical.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> + 01784414217</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-7 text-center text-md-start">
                                <div className="p-3">
                                    &copy; 2020 Copyright:
                                    Drmoinamiamedical.com
                                </div>
                            </div>
                            <div className="col-lg-5 ml-lg-0 text-center text-md-end">
                                <NavLink to='/login' className="btn btn-outline-light m-1">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </NavLink>
                                <NavLink to='/login' className="btn btn-outline-light m-1">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </NavLink>
                                <NavLink to='/login' className="btn btn-outline-light m-1">
                                    <FontAwesomeIcon icon={faPinterest} />
                                </NavLink>
                                <NavLink to='/login' className="btn btn-outline-light m-1">
                                    <FontAwesomeIcon icon={faGithub} />
                                </NavLink>
                                <NavLink to='/login' className="btn btn-outline-light m-1">
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div >
    );
};

export default Footer;