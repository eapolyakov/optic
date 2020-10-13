import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";
import CarouselPromo from "./components/CarouselPromo";
import SectionAbout from "./components/SectionAbout";
import SiteHalf from "./components/SiteHalf"
import MainServices from "./components/MainServices";
import SectionPromo from "./components/SectionPromo";
import Reviews from "./components/Reviews";
import PreFooter from "./components/PreFooter"
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import SectionServises from "./components/SectionServises";
import NewsTopics from "./components/NewsTopics";
import SinglePromo from "./components/SinglePromo";
import SectionLocations from "./components/SectionLocations";
import FormContainer from "./components/FormContainer";
import LocationPodolsk from "./components/LocationPodolsk";
import LocationSherbinka from "./components/LocationSherbinka";
import LocationSP from "./components/LocationSherbinka"

function App(props) {
   return (<div className="site-wrap bg-image"
                style = {{
                    backgroundSize: "25%",
                    backgroundAttachment: "fixed",
                    backgroundImage: "url(images/topography.png)",
                    backgroundRepeat: "repeat"}}>
      <BrowserRouter>
          <MobileMenu/>
          <Menu/>
          <Route exact path="/" render={()=>{
              return <div>
                  <Carousel/>
                  <SinglePromo/>
                  <SectionLocations/>
                  <CarouselPromo/>
                  <SiteHalf/>
                  <MainServices/>
                  <Reviews/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/catalog" render={()=>{
              return <div>
                  <SinglePromo/>
                  <CarouselPromo/>
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
                  <FormContainer/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/podolsk" render={()=> {
              return <div>
                  <LocationPodolsk/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/sherbinka" render={()=> {
              return <div>
                  <LocationSherbinka/>
                  <PreFooter/>
              </div>
          }}/>
          <Route path="/sp" render={()=> {
              return <div>
                  <LocationSP/>
                  <PreFooter/>
              </div>
          }}/>
          <Footer/>
      </BrowserRouter>
   </div>)
}

export default App;
