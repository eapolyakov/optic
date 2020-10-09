import React from "react";
import {NavLink} from "react-router-dom";
import {Map, YMaps} from 'react-yandex-maps';

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
                        <h2 className="h5">г. Подольск</h2>
                        <span className="d-block mb-4">ул. Кирова д.50/2</span>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.425824, 37.526429], zoom: 16 }} />
                        </div>
                    </YMaps>
                </div>
                <div className="col-md-4 text-center">
                    <img src="images/sherbinka.png" alt="Image" className="img-fluid w-25 mb-4"/>
                        <h2 className="h5">г.о. Щербинка</h2>
                        <span className="d-block mb-4">ул. 40 лет Октября д.3А</span>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.511139, 37.565210], zoom: 16 }} />
                        </div>
                    </YMaps>
                </div>
                <div className="col-md-4 text-center">
                    <img src="images/sp.png" alt="Image" className="img-fluid w-25 mb-4"/>
                    <h2 className="h5">г. Сергиев Посад</h2>
                    <span className="d-block mb-4">пр-т Красной Армии д.12</span>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [56.297448, 38.129028], zoom: 16 }} />
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    </div>
}

export default SectionLocations;