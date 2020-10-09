import React from "react";

function CityContacts(props) {
    return  <div className="col-lg-12">
        <div className="p-4 mb-3">
            <h3 className="h5 text-black mb-3">Контактная информация</h3>
            <p className="mb-0 font-weight-bold">Адрес</p>
            <p className="mb-4">{props.address}</p>
            <p className="mb-0 font-weight-bold">Телефон</p>
            <p className="mb-4"><a href="#">{props.phone}</a></p>
            <p className="mb-0 font-weight-bold">Email</p>
            <p className="mb-0"><a href="#">{props.email}</a></p>
        </div>
    </div>
}

export default CityContacts;