import React from "react";

export default function Picture(props){
    return <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: `url(${props.image}`}}
                data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="row align-items-end justify-content-right p-5">
            <div className="col-md-7 text-center" data-aos="fade" >
                <h1 className="text-uppercase">{props.h1}</h1>
                <span className="caption d-block text-white">{props.span}</span>
            </div>
        </div>
    </div>
}