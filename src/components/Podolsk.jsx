import React from "react";
import {Map, YMaps, Placemark} from 'react-yandex-maps';
import CityContacts from "./CityContacts";

const mapData = {
    center: [55.425824, 37.526429],
    zoom: 16,

};

function Podolsk() {
    return <div className="container">
        <div className="row">
            <YMaps>
                <div className="col-md-8 pt-4">
                    <Map defaultState={mapData}/>
                </div>
            </YMaps>
            <div className="col-md-4">
                <CityContacts address = "ул. Кирова д.50/2" phone = "+7(909)647-60-00" email = "snamiyarko@mail.ru"/>
            </div>
        </div>
    </div>
    }



export default Podolsk;