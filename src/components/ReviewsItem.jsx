import React from "react";

export default function ReviewsItem(props){
    return <div className="p-3">
        <div className="d-block block-testimony w-75 mx-auto text-center">
            <div className="person w-25 mx-auto mb-3">
                <img src={props.image} alt="Image" className="img-fluid rounded-circle"/>
            </div>
            <div className="">
                <h2 className="h5 mb-3">{props.name}</h2>
                <blockquote className="text-justify">&ldquo;{props.review}&rdquo;</blockquote>
            </div>
        </div>
    </div>
}


