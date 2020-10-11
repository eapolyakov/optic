import React from "react";
import {NavLink} from "react-router-dom";

function CityContactCard(props){
    return <div className="col-md-4 text-center">
        <NavLink exact to={"/"+props.id}>
            <img src={props.image} alt="Image" className="img-fluid w-25 mb-4"/>
            <h2 className="h5">{props.city}</h2>
        </NavLink>
        <span className="d-block">{props.address}</span>
        <span className="d-block mb-4">{props.phone}</span>
    </div>
}

export default CityContactCard;