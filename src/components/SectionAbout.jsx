import React from "react";

function SectionAbout() {
    return <div className="site-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12"><h2 className="text-uppercase text-center">Яркий Мир - сеть салонов оптики</h2></div>
            </div>
            <div className="row mb-5">
                <div className="col-md-12">
                    <img src="images/about_ym.jpg" alt="О нас" className="img-fluid" width='100%'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ml-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                        voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis
                        nesciunt veniam qui fugit doloremque numquam quod.</p>
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                        nesciunt recusandae repellendus asperiores amet.</p>
                </div>
            </div>
        </div>
    </div>
}
export default SectionAbout;