import React from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
   return <div className="site-navbar-wrap js-site-navbar bg-primary">
      <div className="container">
         <div className="site-navbar bg-primary">
            <div className="row align-items-center">
               <div className="col-2 bg-primary">
                  <NavLink to="/" className="font-weight-bold">
                     <img className="bg-primary" src="images/logo.png" />
                  </NavLink>
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
                              <NavLink to="/catalog">Каталог</NavLink>
                              <ul className="dropdown arrow-top">
                                 <li className="has-children">
                                    <NavLink to="/rimsglasses">Оправы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">Женские</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Мужские</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Детские</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="/spectaclelenses">Очковые линзы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">Монофокальные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Прогрессивные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Фотохромные</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="/contactlenses">Контактные линзы</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="">Однодневные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Двухнедельные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Ежемесячные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Ежеквартальные</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Полугодовые</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Цветные</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="has-children">
                                    <NavLink to="/sunglasses">Солнцезащитные очки</NavLink>
                                    <ul className="dropdown">
                                       <li>
                                          <NavLink to="#">Женские</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Мужские</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="#">Детские</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <NavLink to="/services">Услуги</NavLink>
                           </li>
                           <li>
                              <NavLink to="/news">Новости</NavLink>
                           </li>
                           <li>
                              <NavLink to="/about">О нас</NavLink>
                           </li>
                           <li>
                              <NavLink to="/contacts">Контакты</NavLink>
                           </li>
                           <li>
                              <NavLink to="/contacts">
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
