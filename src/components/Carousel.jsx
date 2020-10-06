import React from 'react';
import Img1 from '../images/hero_bg_1.jpg';
import Img2 from '../images/hero_bg_2.jpg';

function Carousel() {
    return <div className="slide-one-item home-slider owl-carousel">

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: Img1}}
             data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade">
                        <h1 className="font-secondary font-weight-bold text-uppercase">Small Business Insurance
                            Agency</h1>
                        <span className="caption d-block text-white">An Insurance Company</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: Img2}}
             data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 text-center" data-aos="fade">
                        <h1 className="font-secondary font-weight-bold text-uppercase">Insurance Coverage To Meet Your
                            Needs</h1>
                        <span className="caption d-block text-white">You Will Love Our Services</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Carousel;