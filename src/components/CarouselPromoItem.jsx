import React from "react";
import {Link} from "react-router-dom";

export default function CarouselPromoItem(props){
    return <div className="media-image">
        <img src={props.image} alt="Image" className="img-fluid"/>
        <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">{props.h2}</h2>
            <p>{props.text}</p>
            <p>
                <Link to="/contacts" className="btn btn-primary text-white px-4">
                    <span className="caption">{props.link}</span>
                </Link>
            </p>
        </div>
    </div>
}
