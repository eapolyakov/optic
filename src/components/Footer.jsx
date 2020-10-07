import React from "react";

const Year = () => {
    return new Date().getFullYear() + " ";
}

function Footer() {
    return <footer className="site-footer">
        <div className="container">


            <div className="row">
                <div className="col-md-4">
                    <h3 className="footer-heading mb-4 text-white">About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat
                        amet.</p>
                    <p><a href="#" className="btn btn-primary rounded text-white px-4">Read More</a></p>
                </div>
                <div className="col-md-5 ml-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white text-center">Quick Menu</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Insurance</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Insurance</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Home Insurance</a></li>
                                <li><a href="#">Auto Insurance</a></li>
                                <li><a href="#">Travel Insurance</a></li>
                                <li><a href="#">Business Insurance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                    <div className="col-md-12">
                        <p>
                            <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                            <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                            <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                            <a href="#" className="p-2"><span className="icon-vk"></span></a>

                        </p>
                    </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                    <p>
                        Copyright &copy;
                        <Year/>
                        All Rights Reserved | This template is made with <i className="icon-heart text-danger"
                                                                            aria-hidden="true"></i> by <a
                        href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>

            </div>
        </div>
    </footer>
}

export default Footer;