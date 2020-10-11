import React from "react";
import {NavLink} from "react-router-dom";
import CityContactCard from "./CityContactCard";

function SectionLocations(props) {
    return <div className="site-section"
                style = {{backgroundAttachment: "fixed"}} style = {{backgroundImage: "url(images/topography.png)"}}>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Наши салоны</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <CityContactCard
                    id="contacts_podolsk"
                    image={"images/podolsk.png"}
                    city="г. Подольск"
                    address="ул. Кирова д.50/2"
                    phone="+7(909)647-60-00"
                />
                <CityContactCard
                    id="contacts_sherbinka"
                    image={"images/sherbinka.png"}
                    city="г.о. Щербинка"
                    address="ул. 40 лет Октября д.3А"
                    phone="+7(963)764-74-70"
                />
                <CityContactCard
                    id="contacts_sp"
                    image={"images/sp.png"}
                    city="г. Сергиев Посад"
                    address="пр-т Красной Армии д.12"
                    phone="+7(906)727-00-22"
                />
            </div>
        </div>
    </div>
}

export default SectionLocations;