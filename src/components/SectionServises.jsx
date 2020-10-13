import React from "react";
import ServiceItem from "./ServiceItem";

function SectionServises() {
    return <div className="site-section">
        <div className="container">
            <div className="row pb-3">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Услуги для Вас</h2>
                </div>
            </div>
            <div className="row">
                <ServiceItem
                       icon={<i className="fas fa-user-nurse"></i>}
                       article ="Консультация офтальмолога"
                       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <ServiceItem
                        icon={<i className="far fa-eye"></i>}
                        article ="Проверка зрения"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <ServiceItem
                        icon={<i className="fas fa-tools"></i>}
                        article ="Ремонт очков"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <ServiceItem
                        icon={<i className="fas fa-spray-can"></i>}
                        article ="Тонировка очковых линз"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <ServiceItem
                        icon={<i className="fas fa-calendar-day"></i>}
                        article ="Очки за 15 минут"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <ServiceItem
                        icon={<i className="fas fa-glasses"></i>}
                        article ="Подбор очков и контактных линз"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
            </div>
        </div>
    </div>
}

export default SectionServises;