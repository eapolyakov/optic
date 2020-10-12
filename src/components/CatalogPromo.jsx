import React from "react";
import {Link} from "react-router-dom";

function CatalogPromo(){
    return <div className="site-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <p className="mb-5"><img src="images/sale.png" alt="Image" className="img-fluid"/></p>
                </div>
                <div className="col-lg-5 ml-auto">
                    <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Супер акция октября</h2>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ad, tempora
                        incidunt accusantium. Similique magni quaerat beatae illo aliquid. Libero non ipsa nisi,
                        corporis architecto incidunt rem repellendus asperiores numquam!</p>
                    <p><Link to="/contacts" className="btn btn-outline-primary py-2 px-4">Подробнее</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default CatalogPromo;