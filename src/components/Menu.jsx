import React from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
   return <div className="site-navbar-wrap js-site-navbar bg-white">
      <div className="container">
         <div className="site-navbar bg-light">
            <div className="row align-items-center">
               <div className="col-2">
                  <h2 className="mb-0 site-logo">
                     <NavLink to="" className="font-weight-bold">Яркий мир</NavLink>
                  </h2>
               </div>
               <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                     <div className="container">
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                           <NavLink to="#" className="site-menu-toggle js-menu-toggle text-black">
                              <span className="icon-menu h3"></span>
                           </NavLink>
                        </div>
                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                           <li>
                              <NavLink exact to="">Главная</NavLink>
                           </li>
                           <li className="has-children">
                              <NavLink to="catalog">Каталог</NavLink>
                              <ul className="dropdown arrow-top">
                                 <li className="has-children">
                                    <NavLink to="rimsglasses">Оправы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">1</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">2</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">3</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="spectaclelenses">Линзы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="insurance">1</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="insurance">2</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="insurance">3</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="contactlenses">Контактные линзы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">1</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">2</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">3</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="sunglasses">Солнцезащитные очки</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">1</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">2</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">3</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <NavLink to="services">Услуги</NavLink>
                           </li>
                           <li>
                              <NavLink to="news">Новости</NavLink>
                           </li>
                           <li>
                              <NavLink to="about">О нас</NavLink>
                           </li>
                           <li>
                              <NavLink to="contacts">Контакты</NavLink>
                           </li>
                           <li>
                              <NavLink to="contacts">
                                 <span className="d-inline-block p-3 bg-primary text-white btn btn-primary">Задать вопрос</span>
                              </NavLink>
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
