import React from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom"
import './App.css';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Carousel from "./components/Carousel";


function App() {
   return (<div className="site-wrap">
      <BrowserRouter>
         <MobileMenu/>
         <Menu/>
      </BrowserRouter>
          <Carousel/>
   </div>
   );
}

export default App;
