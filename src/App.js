import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";
import SectionCatalog from "./components/SectionCatalog";
import Section2 from "./components/Section2";
import SiteHalf from "./components/SiteHalf"
import SectionIcons from "./components/SectionIcons";
import SectionPromo from "./components/SectionPromo";
import Reviews from "./components/Reviews";
import PreFooter from "./components/PreFooter"
import Footer from "./components/Footer";
import ServiceSection1 from "./components/ServiceSection1";
import ServiceSection2 from "./components/ServiceSection2";
import NewsTopics from "./components/NewsTopics";
import Contacts from "./components/Contacts";
import CatalogPromo from "./components/CatalogPromo";
import SectionLocations from "./components/SectionLocations";

function App(props) {
   return (<div className="site-wrap">
      <BrowserRouter>
          <MobileMenu/>
          <Menu/>
          <Route exact path="/" render={()=>{
              return <div>
                  <Carousel/>
                  <SectionCatalog/>
                  <SectionLocations/>
                  <Section2/>
                  <SiteHalf/>
                  <SectionIcons/>
                  <SectionPromo/>
                  <Reviews/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/catalog" render={()=>{
              return <div>
                  <CatalogPromo/>
                  <SectionCatalog/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/services" render={()=>{
              return <div>
                  <ServiceSection1 h1="Наши услуги"/>
                  <ServiceSection2/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/news" render={()=> {
              return <div>
                  <ServiceSection1 h1="Новости"/>
                  <NewsTopics getNews ={props.getNews}/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/about" render={()=> {
              return <div>
                  <ServiceSection1 h1="О нас"/>
                  <SiteHalf/>
                  <Reviews/>
                  <SiteHalf/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/contacts" render={()=> {
              return <div>
                  <SectionLocations/>
                  <Contacts/>
                  <PreFooter/>
              </div>
          }}/>
          <Footer/>
      </BrowserRouter>
   </div>)
}

export default App;
