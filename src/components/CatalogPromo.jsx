import React from "react";

function CatalogPromo(){
    return <div className="site-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
                </div>
                <div className="col-lg-5 ml-auto">
                    <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Thousands of Houses Damage
                        Each Year</h2>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ad, tempora
                        incidunt accusantium. Similique magni quaerat beatae illo aliquid. Libero non ipsa nisi,
                        corporis architecto incidunt rem repellendus asperiores numquam!</p>
                    <p><a href="#" className="btn btn-outline-primary py-2 px-4">Insured Yours Now</a></p>
                </div>
            </div>
        </div>
    </div>
}

export default CatalogPromo;