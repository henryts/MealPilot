import React from "react";
import ReactDOM from "react-dom/client";
import { HEADER } from "./src/components/Header";
import { Body } from "./src/components/Body";
import Contact from "./src/components/Contact";
import { Error } from "./src/components/Error";
import About from "./src/components/About";
import logo from './public/logo.png';

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import './index.css'
import { Error } from "./src/components/Error";


if (typeof Request === "undefined") {
  globalThis.Request = window.Request;
}

if (typeof Buffer === 'undefined') {
  window.Buffer = require('buffer').Buffer;
}
// Patch for Parcel’s Node polyfill issue – keep if you actually need it

const AppComponent = () => {
  return (
    <div className="appContainer">
    <HEADER></HEADER>
    <Outlet></Outlet>
    
    </div>
  )
  
};
const appRouter = createBrowserRouter( [
{
  path: '/',
  element: <AppComponent/>,
  children: [


    {
  path: '/about',
  element: <About/>
},
{
  path: '/contact',
  element: <Contact/>
}
 


  ],
  errorElement:<Error/>

}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
