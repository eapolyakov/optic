import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LocationPodolsk from "./LocationPodolsk";
import LocationSherbinka from "./LocationSherbinka";
import LocationSP from "./LocationSP";

export default function SectionLocations() {
    return <div className="site-section"
                style = {{backgroundAttachment: "fixed", backgroundImage: "url(images/topography.png)"}}>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Наши салоны</h2>
                </div>
            </div>
            <Router>
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <Link to="/contacts/podolsk">
                        <img src="images/podolsk.png" alt="Podolsk" className="img-fluid w-25 mb-4"/>
                        <h2 className="h5">Яркий Мир г. Подольск</h2>
                        <span className="d-block mb-1">Показать карту</span>
                    </Link>
                    <span className="d-block mb-4"><a href="tel: +7(909)647-60-00">Позвонить</a></span>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="/contacts/sherbinka">
                        <img src="images/sherbinka.png" alt="Sherbinka" className="img-fluid w-25 mb-4"/>
                        <h2 className="h5"> Яркий Мир г.о. Щербинка</h2>
                        <span className="d-block mb-1">Показать карту</span>
                    </Link>
                    <span className="d-block mb-4"><a href="tel: +7(963)764-74-70">Позвонить</a></span>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="/contacts/sp">
                        <img src="images/sp.png" alt="Sergiev Posad" className="img-fluid w-25 mb-4"/>
                        <h2 className="h5">г. Сергиев Посад</h2>
                        <span className="d-block mb-1">Показать карту</span>
                    </Link>
                        <span className="d-block mb-4"><a href="tel: +7(906)727-00-22">Позвонить</a></span>

                </div>
            </div>
                <Switch>
                    <Route path="/contacts/podolsk">
                        <LocationPodolsk />
                    </Route>
                    <Route path="/contacts/sherbinka">
                        <LocationSherbinka />
                    </Route>
                    <Route path="/contacts/sp">
                        <LocationSP />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
}