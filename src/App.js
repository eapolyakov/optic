import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import SiteHalf from "./components/SiteHalf"
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Reviews from "./components/Reviews";
import PreFooter from "./components/PreFooter"
import Footer from "./components/Footer";
import ServiceSection1 from "./components/ServiceSection1";
import ServiceSection2 from "./components/ServiceSection2";
import NewsSection2 from "./components/NewsSection2";
import Contacts from "./components/Contacts";

function App() {
   return (<div className="site-wrap">
      <BrowserRouter>
          <MobileMenu/>
          <Menu/>
          <Route exact path="/" render={()=>{
              return <div>
                  <Carousel/>
                  <Section1/>
                  <Section2/>
                  <SiteHalf/>
                  <Section3/>
                  <Section4/>
                  <Reviews/>
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
                  <NewsSection2/>
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
                  <ServiceSection1 h1="Контакты"/>
                  <Section3/>
                  <Contacts/>
                  <PreFooter/>
              </div>
          }}/>
          <Footer/>
      </BrowserRouter>
   </div>)
}

export default App;
