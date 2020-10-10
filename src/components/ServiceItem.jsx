import React from "react";
import {NavLink} from "react-router-dom";

function ServiceItem(props) {
    return <div className="border p-4 text-with-icon">
            <span className="icon display-4 mb-4 d-block text-primary">{props.icon}</span>
            <h2 className="h5 text-uppercase">{props.article}</h2>
            <p>{props.description}</p>
            <p><NavLink to="#">Узнать больше</NavLink></p>
        </div>
}

export default ServiceItem;