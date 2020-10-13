import React from "react";

export default function MainServicesItem(props) {
    return  <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right">
        <div className="text-center">
            <span className="icon display-4 d-block mb-3 text-primary">{props.icon}</span>
            <h3 className="text-uppercase h4 mb-3">{props.article}</h3>
                <p>{props.description}</p>
            </div>
        </div>
}