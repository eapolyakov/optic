import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, NavLink, Route} from "react-router-dom"
import './App.css';

const Menu = () =>{

  return <div className="site-navbar-wrap js-site-navbar bg-white">
    <div className="container">
      <div className="site-navbar bg-light">
        <div className="row align-items-center">
          <div className="col-2">
            <h2 className="mb-0 site-logo"><a href="index.html" className="font-weight-bold">Яркий мир</a></h2>
          </div>
          <div className="col-10">
            <nav className="site-navigation text-right" role="navigation">
              <div className="container">
                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                  <a href="#"
                    className="site-menu-toggle js-menu-toggle text-black">
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active"><a href="index.html">Home</a></li>
                  <li className="has-children">
                    <a href="insurance.html">Insurance</a>
                    <ul className="dropdown arrow-top">
                      <li><a href="#">Home Insurance</a></li>
                      <li><a href="#">Auto Insurance</a></li>
                      <li><a href="#">Travel Insurance</a></li>
                      <li className="has-children">
                        <a href="#">Sub Menus</a>
                        <ul className="dropdown">
                          <li><a href="insurance.html">Home Insurance</a></li>
                          <li><a href="insurance.html">Auto Insurance</a></li>
                          <li><a href="insurance.html">Travel Insurance</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="contact.html"><span className="d-inline-block p-3 bg-primary text-white btn btn-primary">Get A Quote</span></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function App() {
  return (
    <div className="contailer-fluid">
      <BrowserRouter>
        <div className="">
          <div className="col">
            <Menu />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
