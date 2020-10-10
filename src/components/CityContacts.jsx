import React from "react";

function CityContacts(props) {
    return  <div className="col-lg-12">
        <div className="p-4 mb-3">
            <h3 className="h5 text-black mb-3">Контактная информация</h3>
            <p className="mb-0 font-weight-bold">Адрес</p>
            <p className="mb-2">{props.address}</p>
            <p className="mb-0 font-weight-bold">Часы работы</p>
            <p className="mb-2">{props.time}</p>
            <p className="mb-0 font-weight-bold">Телефон</p>
            <p className="mb-2">{props.phone}</p>
            <p className="mb-0 font-weight-bold">Email</p>
            <p className="mb-0">{props.email}</p>
        </div>
    </div>
}

export default CityContacts;