import React from "react";
import {NavLink} from "react-router-dom";

export default function ServiceItem(props) {
    return <div className="col-md-4 text-center mb-4 bg-light">
    <div className="border p-4 text-with-icon">
            <span className="icon display-4 mb-4 d-block text-primary">{props.icon}</span>
            <h2 className="h5 text-uppercase">{props.article}</h2>
            <p>{props.description}</p>
            <p><NavLink to="#">Узнать больше</NavLink></p>
        </div>
    </div>
}