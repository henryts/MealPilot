import React from "react";
import ReactDOM from "react-dom/client";
import { HEADER } from "./src/components/Header";
import { Body } from "./src/components/Body";
import logo from './public/logo.png';
import './index.css'

// Patch for Parcel’s Node polyfill issue – keep if you actually need it

const AppComponent = () => {
  return (
    <div className="appContainer">
    <HEADER></HEADER>
    <Body></Body>
    </div>
  )
  
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
