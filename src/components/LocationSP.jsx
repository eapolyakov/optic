import React from "react";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';
import CityContacts from "./CityContacts";

const mapState = {
    center: [56.297448, 38.129028],
    zoom: 15
};

function SP() {
    return <div className="container">
        <div className="row">
            <div className="col-md-8 p-4">
                <YMaps>
                    <Map state={mapState} width='100%' height='300px'>
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[56.297448, 38.129028]}
                            properties={{
                                balloonContentHeader: "Яркий Мир Сергиев Посад",
                                balloonContent: "Адрес <strong>пр-т Красной Армии д.12</strong>"
                            }}
                        />
                        <ZoomControl
                            defaultOptions
                        />
                    </Map>
                </YMaps>
            </div>
            <div className="col-md-4 text-right">
                <CityContacts address = "пр-т Красной Армии д.12" phone = "+7 (906) 727-00-22" email = "snamiyarko@mail.ru" time = "Ежедневно с 10:00 до 20:00"/>
            </div>
        </div>
    </div>
}

export default SP;