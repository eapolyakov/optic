import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Carousel() {
    return <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        loop
        >
        <div className="item">
            <div className="site-blocks-cover inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(images/bg_mir_2.jpg)"}}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-12 p-5" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Мужские очки</h1>
                            <span className="caption d-block text-white">Салон оптики Яркий Мир</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="site-blocks-cover inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.6" style={{backgroundImage: "url(images/bg_mir_1.jpg)"}}>
                <div className="container">
                    <div className="row align-items-end justify-content-center">
                        <div className="col-md-12 p-5" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Мужские и женские очки</h1>
                            <span className="caption d-block text-white">Салон оптики</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="site-blocks-cover inner-page overlay"
                 data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(images/bg_mir_3.jpg)"}}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-12 p-5" data-aos="fade">
                            <h1 className="font-secondary font-weight-bold text-uppercase">Солнцезащитные очки</h1>
                            <span className="caption d-block text-white">Последняя коллекция</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OwlCarousel>
}

export default Carousel;
