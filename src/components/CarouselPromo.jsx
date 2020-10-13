import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import {Link} from "react-router-dom";
import {render} from "react-dom";
import CarouselPromoItem from "./CarouselPromoItem";

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

export default function CarouselPromo() {
        return <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-3">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Акции и Скидки</span>
                        <h2 className="site-section-heading text-uppercase text-center font-secondary">Выгодные предложения</h2>
                    </div>
                </div>
                <OwlCarousel
                    className="owl-stage-outer"
                    {...options}

                >
                    <CarouselPromoItem
                        image="images/chek.jpg"
                        h2="Проверка зрения бесплатно!"
                        text="Наши опытные специалисты проведут полную диагностику Вашего зрения"
                        link="Записаться"

                    />
                    <CarouselPromoItem
                        image="images/ochki620.jpg"
                        h2="Очки за 620 рублей"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."
                        link="Уточнить условия"

                    />
                    <CarouselPromoItem
                        image="images/card.jpg"
                        h2="Дисконтная карта"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."
                        link="Узнать больше"

                    />
                    <CarouselPromoItem
                        image="images/sale50.png"
                        h2="Вторые очки за пол цены"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."
                        link="Хочу получить"

                    />
                    <CarouselPromoItem
                        image="images/sale_sg.jpg"
                        h2="Распродажа солцезащитных очков"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate."
                        link="Хочу получить"

                    />
                </OwlCarousel>
            </div>
        </div>
    }