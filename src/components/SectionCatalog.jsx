import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


function SectionCatalog(){
   return <div className="site-section">
       <div className="container">
           <div className="row">
               <div className="col-md-12 text-center">
                   <span className="caption d-block mb-2 font-secondary font-weight-bold">Акции &amp; Скидки</span>
                   <h2 className="site-section-heading text-uppercase text-center font-secondary">Выгодные предложения</h2>
               </div>
           </div>
               <OwlCarousel
                   className="owl-theme"
                   items="3"
                   autoplay
                   loop
                   margin={5}
               >
                   <div className="media-image">
                       <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Home Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
                   <div className="media-image">
                       <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Auto Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
                   <div className="media-image">
                       <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Travel Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
                   <div className="media-image">
                       <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Home Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
                   <div className="media-image">
                       <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Auto Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
                   <div className="media-image">
                       <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                       <div className="media-image-body">
                           <h2 className="font-secondary text-uppercase">Travel Insurance</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                           <p><a href="#" className="btn btn-primary text-white px-4"><span className="caption">Learn More</span></a>
                           </p>
                       </div>
                   </div>
           </OwlCarousel>
       </div>
   </div>
}

export default SectionCatalog;