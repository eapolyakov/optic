import React from "react";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';
import CityContacts from "./CityContacts";

const mapState = {
    center: [55.511139, 37.565210],
    zoom: 15
};

function Sherbinka() {
    return <div className="container">
        <div className="row">
            <div className="col-md-8 p-4">
                <YMaps>
                    <Map state={mapState} width='100%' height='300px'>
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[55.511139, 37.565210]}
                            properties={{
                                balloonContentHeader: "Яркий Мир Щербинка",
                                balloonContent: "Адрес <strong>ул. 40 лет Октября д.3А</strong>"
                            }}
                        />
                        <ZoomControl
                           defaultOptions
                        />
                    </Map>
                </YMaps>
            </div>
            <div className="col-md-4 text-right">
                <CityContacts address = "ул. 40 лет Октября д.3А" phone = "+7 (963) 764-74-70" email = "snamiyarko@mail.ru" time = "Ежедневно с 10:00 до 20:00"/>
            </div>
        </div>
    </div>
}

export default Sherbinka;