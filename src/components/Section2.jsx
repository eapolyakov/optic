import React from "react";
import Img1 from "../images/about_1.jpg"

function Section2() {
    return <div className="site-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12"><h2 className="text-uppercase text-center">We Are Trusted Agency Company</h2></div>
            </div>
            <div className="row mb-5">
                <div className="col-md-12">
                    <img src={Img1} alt="image" className="img-fluid"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md ml-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                        voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis
                        nesciunt veniam qui fugit doloremque numquam quod.</p>
                </div>
                <div className="col-md">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                        nesciunt recusandae repellendus asperiores amet.</p>
                </div>
            </div>
        </div>
    </div>
}
export default Section2;