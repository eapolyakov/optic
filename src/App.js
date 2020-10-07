import React from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom"
import './App.css';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import SiteHalf from "./components/SiteHalf"
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";


function App() {
   return (<div className="site-wrap">
      <BrowserRouter>
          <MobileMenu/>
          <Menu/>
          <Carousel/>
          <Section1/>
          <Section2/>
          <SiteHalf/>
          <Section3/>
          <Section4/>
      </BrowserRouter>
   </div>);
}

export default App;
