import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import {Link} from "react-router-dom";
import {render} from "react-dom";

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    loop: true,
    responsive: {
        0: {items: 1},
        400: {items: 1},
        600: {items: 2},
        700: {items: 3}
    }

};

export default function SectionCatalog() {
        return <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Акции и Скидки</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Выгодные предложения</h2>
                    </div>
                </div>
                <OwlCarousel
                    className="owl-stage-outer"
                    {...options}

                >
                    <div className="media-image">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Бесплатная проверка зрения</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><Link to="/contacts" className="btn btn-primary text-white px-4"><span className="caption">Хочу проверить</span></Link>
                            </p>
                        </div>
                    </div>
                    <div className="media-image">
                        <img src="images/ochki620.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Очки за 620 рублей</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><Link to="/contacts" className="btn btn-primary text-white px-4"><span className="caption">Уточнить условия</span></Link>
                            </p>
                        </div>
                    </div>
                    <div className="media-image">
                        <img src="images/sale50.png" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Вторые очки за пол цены</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><Link to="/contacts" className="btn btn-primary text-white px-4"><span className="caption">Узнать больше</span></Link>
                            </p>
                        </div>
                    </div>
                    <div className="media-image">
                        <img src="images/card.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Дисконтная карта</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><Link to="/contacts" className="btn btn-primary text-white px-4"><span className="caption">Хочу получить</span></Link>
                            </p>
                        </div>
                    </div>
                    <div className="media-image">
                        <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Распродажа солцезащитных очков</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><Link to="/contacts" className="btn btn-primary text-white px-4"><span className="caption">Успеть купить</span></Link>
                            </p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    }