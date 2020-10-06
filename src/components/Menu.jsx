import React from 'react';

function Menu() {
   return <div className="site-navbar-wrap js-site-navbar bg-white">
      <div className="container">
         <div className="site-navbar bg-light">
            <div className="row align-items-center">
               <div className="col-2">
                  <h2 className="mb-0 site-logo">
                     <a href="index.html" className="font-weight-bold">Яркий мир</a>
                  </h2>
               </div>
               <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                     <div className="container">
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                           <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                              <span className="icon-menu h3"></span>
                           </a>
                        </div>
                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                           <li className="active">
                              <a href="index.html">Home</a>
                           </li>
                           <li className="has-children">
                              <a href="insurance.html">Insurance</a>
                              <ul className="dropdown arrow-top">
                                 <li>
                                    <a href="#">Home Insurance</a>
                                 </li>
                                 <li>
                                    <a href="#">Auto Insurance</a>
                                 </li>
                                 <li>
                                    <a href="#">Travel Insurance</a>
                                 </li>
                                 <li className="has-children">
                                    <a href="#">Sub Menus</a>
                                    <ul className="dropdown">
                                       <li>
                                          <a href="insurance.html">Home Insurance</a>
                                       </li>
                                       <li>
                                          <a href="insurance.html">Auto Insurance</a>
                                       </li>
                                       <li>
                                          <a href="insurance.html">Travel Insurance</a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <a href="services.html">Услуги</a>
                           </li>
                           <li>
                              <a href="blog.html">Новости</a>
                           </li>
                           <li>
                              <a href="about.html">О нас</a>
                           </li>
                           <li>
                              <a href="contact.html">Контакты</a>
                           </li>
                           <li>
                              <a href="contact.html">
                                 <span className="d-inline-block p-3 bg-primary text-white btn btn-primary">Get A Quote</span>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default Menu;
