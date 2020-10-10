import React from "react";
import {NavLink} from "react-router-dom";

function SectionLocations() {
    return <div className="site-section"
                style = {{backgroundAttachment: "fixed"}} style = {{backgroundImage: "url(images/topography.png)"}}>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Наши салоны</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <img src="images/podolsk.png" alt="Image" className="img-fluid w-25 mb-4"/>
                    <NavLink to="/podolsk"><h2 className="h5">г. Подольск</h2></NavLink>
                    <span className="d-block">ул. Кирова д.50/2</span>
                    <span className="d-block mb-4">+7(909)647-60-00</span>
                </div>
                <div className="col-md-4 text-center">
                    <img src="images/sherbinka.png" alt="Image" className="img-fluid w-25 mb-4"/>
                    <NavLink to="/sherbinka"><h2 className="h5">г.о. Щербинка</h2></NavLink>
                    <span className="d-block">ул. 40 лет Октября д.3А</span>
                    <span className="d-block mb-4">+7(963)764-74-70</span>
                </div>
                <div className="col-md-4 text-center">
                    <img src="images/sp.png" alt="Image" className="img-fluid w-25 mb-4"/>
                    <NavLink to="/sp"><h2 className="h5">г. Сергиев Посад</h2></NavLink>
                    <span className="d-block">пр-т Красной Армии д.12</span>
                    <span className="d-block mb-4">+7(906)727-00-22</span>
                </div>
            </div>
        </div>
    </div>
}

export default SectionLocations;