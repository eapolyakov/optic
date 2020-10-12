import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";
import SectionCatalog from "./components/SectionCatalog";
import SectionAbout from "./components/SectionAbout";
import SiteHalf from "./components/SiteHalf"
import SectionIcons from "./components/SectionIcons";
import SectionPromo from "./components/SectionPromo";
import Reviews from "./components/Reviews";
import PreFooter from "./components/PreFooter"
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import SectionServises from "./components/SectionServises";
import NewsTopics from "./components/NewsTopics";
import FeedBack from "./components/FeedBack";
import CatalogPromo from "./components/CatalogPromo";
import SectionLocations from "./components/SectionLocations";
import LocationPodolsk from "./components/LocationPodolsk";
import LocationSherbinka from "./components/LocationSherbinka";
import LocationSP from "./components/LocationSP";

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
                  <Picture h1="Наши услуги"image="images/bg_mir_6.jpg"/>
                  <SectionServises/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/news" render={()=> {
              return <div>
                  <Picture h1="Новости" image="images/bg_girl_1.jpg"/>
                  <NewsTopics getNews ={props.getNews} getTopic={props.getTopic}/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/about" render={()=> {
              return <div>
                  <Picture h1="О нас" image="images/bg_mir_5.jpg"/>
                  <SectionAbout/>
                  <Reviews/>
                  <SiteHalf/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/contacts" render={()=> {
              return <div>
                  <SectionLocations/>
                  <FeedBack/>
                  <PreFooter/>
              </div>
          }}/>
          <Footer/>
      </BrowserRouter>
   </div>)
}

export default App;
