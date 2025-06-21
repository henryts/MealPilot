import React from "react";
import ReactDOM from "react-dom/client";
import logo from './public/logo.png';
import './index.css'

// Patch for Parcel’s Node polyfill issue – keep if you actually need it
if (typeof Request === "undefined") {
  globalThis.Request = window.Request;
}

const HEADER = () => 
    {
    return (
  <div>
    <div className="logoContainer">

        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg?w=768" alt="Logo" />

    </div>
    <div className="navBar">
      <div>Home</div>
      <div>About</div>
      <div>Support</div>
      <div>Map</div>
    </div>
  </div>

    )
    };
   const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://www.maggi.in/sites/default/files/styles/srh_recipes/public/srh_recipes/83100cde6b3045cdce27048211f14019.jpg?h=4f5b30f1&itok=hrD4cQhe"
        alt="Thalassery Food"
      />
      <div className="res-info">
        <h3 className="res-name">Thalassery Food</h3>
        <div className="res-rating">⭐ 4.3 • 30 mins</div>
        <div className="res-cuisines">Kerala, Malabar, Biryani</div>
        <div className="res-location">Kochi, Kerala</div>
      </div>
    </div>
  );
};
 const Body = ()=>{
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
        </div>
    </div>

    )

 }   


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
