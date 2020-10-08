import React from "react";

const Year = () => {
    return new Date().getFullYear() + " ";
}

function Footer() {
    return <footer className="site-footer">
        <div className="container">


            <div className="row">
                <div className="col-md-4">
                    <h3 className="footer-heading mb-4 text-white">Наши адреса</h3>
                    <ul>
                        <li>
                            Адрес Телефон
                        </li>
                        <li>
                            Адрес Телефон
                        </li>
                        <li>
                            Адрес Телефон
                        </li>
                    </ul>
                    <p><a href="#" className="btn btn-primary rounded text-white px-4">Подробнее</a></p>
                </div>
                <div className="col-md-5 ml-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white text-center">Меню</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><a href="#">Домой</a></li>
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Услуги</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                    <li><a href="#">Новости</a></li>
                                    <li><a href="#">Контакты</a></li>
                                    <li><a href="#">Оферта</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Каталог</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Оправы</a></li>
                                <li><a href="#">Линзы</a></li>
                                <li><a href="#">Контактные линзы</a></li>
                                <li><a href="#">Солнцезащитные очки</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-2">
                    <div className="col-md-12">
                        <h3 className="footer-heading mb-4 text-white">Мы в соцсетях</h3>
                    </div>
                    <div className="col-md-12">
                        <p>
                            <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                            <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                            <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                            <a href="#" className="p-2"><span className="icon-vk"></span></a>

                        </p>
                    </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
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