import React from "react";
import {NavLink} from "react-router-dom";

const Year = () => {
    return new Date().getFullYear() + " ";
}

function Footer() {
    return <footer className="site-footer">
        <div className="container">


            <div className="row">
                <div className="col-md-4">
                    <h3 className="footer-heading mb-4 text-white text-center">Наши адреса</h3>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/contacts/podolsk">г. Подольск, ул. Кирова д.50/2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts/sp">г. Сергиев Посад, пр-т Красной Армии д.12</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts/sherbinka">г.о. Щербинка ул. 40 лет Октября д.3А</NavLink>
                        </li>
                    </ul>
                    <p><NavLink to="/contacts" className="btn btn-primary rounded text-white px-4">Подробнее</NavLink></p>
                </div>
                <div className="col-md-6 ml-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white text-center">Меню</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><NavLink to="/">Домой</NavLink></li>
                                    <li><NavLink to="/about">О нас</NavLink></li>
                                    <li><NavLink to="/services">Услуги</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><NavLink to="/news#">Новости</NavLink></li>
                                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                                    <li><NavLink to="#">Оферта</NavLink></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h3 className="footer-heading mb-4 text-white text-center">Каталог</h3>
                            <ul className="list-unstyled">
                                <li><NavLink to="#">Оправы</NavLink></li>
                                <li><NavLink to="#">Линзы</NavLink></li>
                                <li><NavLink to="#">Контактные линзы</NavLink></li>
                                <li><NavLink to="#">Солнцезащитные очки</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="col-md-12">
                        <h3 className="footer-heading mb-4 text-white text-center">Мы в соцсетях</h3>
                    </div>
                    <div className="col-md-12">
                        <p className="pt-4 pl-0">
                            <NavLink to="/form" className="pb-2 pr-0"><i className="fab fa-facebook-f fa-2x"></i></NavLink>
                            <NavLink to="#" className="p-1"><i className="fab fa-instagram fa-2x"></i></NavLink>
                            <NavLink to="#" className="p-1"><i className="fab fa-vk fa-2x"></i></NavLink>
                            <NavLink to="#" className="p-1"><i className="fab fa-odnoklassniki fa-2x"></i></NavLink>

                        </p>
                    </div>
                </div>
            </div>
            <div className="row pt-1 mt-3 text-center text-dark">
                <div className="col-md-12">
                    <p>
                        Copyright &copy;
                        <Year/>
                        All Rights Reserved | This template is made with <i className="icon-heart text-danger"
                                                                            aria-hidden="true"></i> by <a
                        href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>

            </div>
        </div>
    </footer>
}

export default Footer;