import React from "react";

function SiteHalf() {
   return <div>
        <div className="site-half">
            <div className="img-bg-1" style={{backgroundImage: "url('images/hero_bg_2.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 ml-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                            voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis
                            nesciunt veniam qui fugit doloremque numquam quod.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                            nesciunt recusandae repellendus asperiores amet.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="site-half">
            <div className="img-bg-1 right" style={{backgrounImage: "url('images/hero_bg_1.jpg')"}}></div>
            <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-md-5 mr-md-auto py-5">
                        <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
                        <h2 className="site-section-heading text-uppercase font-secondary mb-5">Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis
                            voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis
                            nesciunt veniam qui fugit doloremque numquam quod.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam
                            nesciunt recusandae repellendus asperiores amet.</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
}
export default SiteHalf;