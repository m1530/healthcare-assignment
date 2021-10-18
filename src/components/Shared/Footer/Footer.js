import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
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
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            {/* <hr className="w-100 clearfix d-md-none" /> */}
                            <div className="col-md-2 col-lg-2 mx-auto mt-3 quick-link">
                                <h6 className="text-uppercase mb-4 fw-bold">Quick Links</h6>
                                <p>
                                    <a href="/#">About US</a>
                                </p>
                                <p>
                                    <a href="/#">Services</a>
                                </p>
                                <p>
                                    <a href="/#">Doctors</a>
                                </p>
                            </div>
                            {/* <hr className="w-100 clearfix d-md-none" /> */}

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                                <p><FontAwesomeIcon icon={faHome} /> College Road Chargachh 3460</p>
                                <p><FontAwesomeIcon icon={faEnvelopeOpen} /> moynamia@gmedical.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> + 01784414217</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section class="p-3 pt-0">
                        <div class="row d-flex align-items-center">
                            <div class="col-lg-7 text-center text-md-start">
                                <div class="p-3">
                                    &copy; 2020 Copyright:
                                    Drmoinamiamedical.com
                                </div>
                            </div>
                            <div class="col-lg-5 ml-lg-0 text-center text-md-end">
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    class="text-white"
                                    role="button"
                                ><i class="fab fa-facebook-f"></i
                                ></a>
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    class="text-white"
                                    role="button"
                                ><i class="fab fa-twitter"></i
                                ></a>
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    class="text-white"
                                    role="button"
                                ><i class="fab fa-google"></i
                                ></a>
                                <a
                                    class="btn btn-outline-light btn-floating m-1"
                                    class="text-white"
                                    role="button"
                                ><i class="fab fa-instagram"></i
                                ></a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div >
    );
};

export default Footer;