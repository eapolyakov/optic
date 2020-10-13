import React from "react";
import MainServicesItem from "./MainServicesItem";
import ServiceItem from "./ServiceItem";

function MainServices() {
    return <div className="site-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 text-center">
                    <span className="caption d-block mb-2 font-secondary font-weight-bold">Высококласные специалисты</span>
                    <h2 className="site-section-heading text-uppercase text-center font-secondary">Наше преимущество</h2>
                </div>
            </div>
            <div className="row border-responsive">
                <MainServicesItem
                    icon={<i className="fas fa-user-nurse"></i>}
                    article ="Консультация офтальмолога"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <MainServicesItem
                    icon={<i className="fas fa-tools"></i>}
                    article ="Ремонт очков"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"                />
                <MainServicesItem
                    icon={<i className="fas fa-glasses"></i>}
                    article ="Подбор очков и контактных линз"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
                <MainServicesItem
                    icon={<i className="fas fa-calendar-day"></i>}
                    article ="Очки за 15 минут"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente libero"
                />
            </div>
        </div>
    </div>
}

export default MainServices