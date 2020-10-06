import React from "react";
import Img1 from "../images/img_1.jpg"
import Img2 from "../images/img_2.jpg"
import Img3 from "../images/img_3.jpg"

function Section1(){
   return <div className="site-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span
                        className="caption d-block mb-2 font-secondary font-weight-bold">Products &amp; Services</span>
                    <h2 className="site-section-heading text-uppercase text-center font-secondary">Insurance
                        Coverage</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 block-13 nav-direction-white">
                    <div className="nonloop-block-13 owl-carousel">
                        <div className="media-image">
                            <img src={Img1} alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Home Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                        <div className="media-image">
                            <img src={Img2} alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Auto Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                        <div className="media-image">
                            <img src={Img3} alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Travel Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                        <div className="media-image">
                            <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Home Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                        <div className="media-image">
                            <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Auto Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                        <div className="media-image">
                            <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                                <div className="media-image-body">
                                    <h2 className="font-secondary text-uppercase">Travel Insurance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                    <p><a href="#" className="btn btn-primary text-white px-4"><span
                                        className="caption">Learn More</span></a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Section1;