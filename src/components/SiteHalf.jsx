import React from "react";

export default function SiteHalf() {
   return <div className="site-section">
       <div className="container">
           <div className="row no-gutters align-items-stretch">
               <div className="col-md-6 img-bg-1">
                   <img src="images/lenses.jpg" width="100%"/>
               </div>
               <div className="col-md-6 ml-md-auto pl-lg-5">
                   <span className="caption d-block my-2 font-secondary font-weight-bold text-center">Высокое качество, доступные цены</span>
                   <h2 className="site-section-heading text-uppercase font-secondary mb-3 text-center">Каждый день</h2>
                   <p>Мы рады предложить Вам: огромный ассортимент контактных линз, оправ и солнцезащитных очков, который обновляется каждый сезон.
                       Классика, гламур, авангард, пластик, титан, сталь, стразы, рог, кожа — более 1000 моделей!
                       У нас есть имиджевые очки, очки для вождения, детские очки, солнцезащитные. А также большой выбор аксессуаров!
                   </p>
                   <p>Пользователи контактных линз найдут в наших салонах всё необходимое, тем более, что в сфере контактной коррекции за последнее время произошли революционные открытия.</p>
               </div>
          </div>
       </div>

       <div className="container">
           <div className="row no-gutters align-items-stretch">
               <div className="col-md-6 mr-md-auto pr-lg-5 mb-5">
                   <span className="caption d-block my-2 font-secondary font-weight-bold text-center">Помогаем видеть мир ярче</span>
                   <h2 className="site-section-heading text-uppercase font-secondary mb-3 text-center">8 лет </h2>
                   <p>Клиентам «Яркого Мира» доступны последние достижениями и возможности оптической индустрии.
                       Среди самых популярных моделей очки с прогрессивными и фотохромными линзами.
                       А так же очки для вождения, работы на компьютере, рыбалки, для детей, и занятий спортом.</p>
                   <p>В «Ярком Мире» Вы можете бесплатно проверить остроту зрения! Известно, что зрение нужно проверять минимум один раз в год.
                   Наших клиентов, и тех кто ещё ими не стал Яркий Мир приглашает проверить зрение у опытного врача быстро и без очередей.</p>
               </div>
               <div className="col-md-6 img-bg-1">
                   <img src="images/opravy.jpg" width="100%"/>
               </div>
           </div>
       </div>
   </div>
}
