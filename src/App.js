import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react';
import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Navbar  from "./component/Navbar.js";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './component/Home.js';
import Footer from './component/Footer.js';

const LazyPDFDocument = lazy(() => import('./Baz'));

function App() {


  

  return (
    <>
     {/* <Suspense fallback=
{<div>Component1 are loading please wait...</div>}> */}
<Navbar/>
<Home/>
                <LazyPDFDocument />
            {/* </Suspense> */}
        <Footer/>
      
      </>

      

     
   
  );
}

export default App;
