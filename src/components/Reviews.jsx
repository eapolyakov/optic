import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import ReviewsItem from "./ReviewsItem";

const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: ["<", ">"],
    loop: true,
    responsive: {
        0: {items: 1},
        400: {items: 1},
        600: {items: 2},
    }

};

export default function Rewiews(props) {
    return <div className="site-section block-15 nav-direction-white">
        <div className="container">
            <div className="row pb-3">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Отзывы</h2>
                </div>
            </div>
            <OwlCarousel
                className="owl-theme"
                {...options}

            >
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                    />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
                <ReviewsItem
                    name="Анна Журавкина"
                    image="images/person_1.jpg"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!"
                />
            </OwlCarousel>
        </div>
    </div>

}