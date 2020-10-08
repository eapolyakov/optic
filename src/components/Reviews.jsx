import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Rewiews() {
    return <div className="site-section block-14 bg-light nav-direction-white">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Отзывы</h2>
                </div>
            </div>
            <OwlCarousel
                className="owl-theme"
                items="1"
                autoplay
                loop
                nav

            >
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Katie Johnson</h2>
                                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                    accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora
                                    ipsam!&rdquo;</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Jun Mars</h2>
                                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                    accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora
                                    ipsam!&rdquo;</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Shane Holmes</h2>
                                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                    accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora
                                    ipsam!&rdquo;</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-block block-testimony w-75 mx-auto text-center">
                            <div className="person w-25 mx-auto mb-4">
                                <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h2 className="h5 mb-4">Mark Johnson</h2>
                                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                    accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora
                                    ipsam!&rdquo;</blockquote>
                            </div>
                        </div>
                    </div>
            </OwlCarousel>
        </div>
    </div>

}

export default Rewiews;