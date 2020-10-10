import React from "react";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';
import CityContacts from "./CityContacts";

const mapState = {
    center: [55.425824, 37.526429],
    zoom: 15
};

function LocationPodolsk() {
    return <div className="container">
        <div className="row">
            <div className="col-md-8 p-4">
                <YMaps>
                    <Map state={mapState} width='100%' height='300px'>
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[55.425824, 37.526429]}
                            properties={{
                                balloonContentHeader: "Яркий Мир Подольск",
                                balloonContent: "Адрес <strong>ул. Кирова д.50/2</strong>"
                            }}
                        />
                        <ZoomControl
                            defaultOptions
                        />
                    </Map>
                </YMaps>
            </div>
            <div className="col-md-4 text-right">
                <CityContacts address = "ул. Кирова д.50/2" phone = "+7(909)647-60-00" email = "snamiyarko@mail.ru" time = "Ежедневно с 10:00 до 20:00"/>
            </div>
        </div>
    </div>
}

export default LocationPodolsk;