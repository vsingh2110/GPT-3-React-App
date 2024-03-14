import React from "react";
import "./App.css";

// import {  Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import {  Brand, Navbar } from './components';

import {  Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

import { Article, CTA,  Brand, Navbar, Feature } from "./components";

const App = () => (
  <div className="App">
  
    <div className="gradient__bg">
     
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA/>
    <Blog/>
    <Footer/>
    
   
   
   
  </div>
);

export default App;
