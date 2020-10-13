import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import CarouselItem from "./CarouselItem";

function Carousel() {
    return <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        loop
        >
        <CarouselItem
            image = "images/bg_mir_2.jpg"
            h1="Салон оптики Яркий Мир"
            span="Подольск, Щербинка, Сергиев-Посад"
        />
        <CarouselItem
            image = "images/bg_mir_1.jpg"
            h1="Очки для него и для неё"
            span="Большой выбор оправ ведущих брендов"
        />
        <CarouselItem
            image = "images/bg_mir_3.jpg"
            h1="Солнцезащитные очки"
            span="Последняя коллекция"
        />
    </OwlCarousel>
}

export default Carousel;
