import React from "react";

function SectionAbout() {
    return <div className="site-section">
        <div className="container">
            <div className="row mb-3">
                <div className="col-12"><h2 className="text-uppercase text-center">Яркий Мир - сеть салонов оптики</h2></div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <img src="images/about_ym.jpg" alt="О нас" className="img-fluid" width='100%'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-justify">
                    <p>В наших салонах оптики Вы сможете купить очки всех видов начиная от детских и заканчивая имиджевыми и спортивными моделями.
                        В «Ярком Мире» все товары только отличного качества не зависимо от стоимости.
                        Благодаря этому мы обрели доверие клиентов и выдерживаем конкуренцию.
                        Мы стремимся регулярно расширять ассортимент и удерживать оптимальные цены.</p>
                </div>
                <div className="col-md-6 text-justify">
                    <p>Клиентам «Яркого Мира» доступны последние достижениями и возможности оптической индустрии.
                        Среди самых популярных новинок очки с прогрессивными (позволяющими четко видеть на любом расстоянии) и фотохромными (затемняющимися под воздействием ультрафиолетового излучения) линзами.
                        А так же очки для вождения, работы на компьютере, рыбалки, для детей, и занятий спортом.</p>
                </div>
            </div>
        </div>
    </div>
}
export default SectionAbout;