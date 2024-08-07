import React from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../public/assets/logo.png";
import passportz from "../public/assets/passportz.jpeg";
import images from "../public/assets/images.jpg";
import bag from "../public/assets/bag.jpg";
import sofa from "../public/assets/sofa.jpg";
import handbag2 from "../public/assets/handbag2.jpg";
import watch from "../public/assets/watch.jpg";
import study from "../public/assets/study.jpg";
// import Sidebar from '../src/components/sidebar';
import Footer from "../src/components/footer";

const App: React.FC = () => {
  const columnNames = [
    "Taditional Wear",
    "Western Wear",
    "Swim & Beachwear",
    "Winter & Seasonal Wear",
    "Beauty & Grooming",
    "Juwellery",
    "Personal care Applicationces",
    "International Brands",
    "Foot Wear",
    "Watches",
    "Accessories",
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-middle">
          <div className="search-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search product"
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <img src={passportz} alt="Not available" /> Diego Morata
            </li>
            <li>Chart</li>
            <li>Orders</li>
          </ul>
        </div>
      </nav>
      <hr />
      <div className="container">
        <div className="sidebar">
          <ul>
            {columnNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <div className="hero">
            <img src={sofa} alt="loading" />
            <div className="icon-text">
              Biggest Offer Revealed <br /> 
              <div className="text">
              MORE DEALS INSIDE <br /> UP TO 50% OFF
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="first">
              <h4>Recently Viewed</h4>
              <img src={images} alt="loading" />
            </div>
            <div className="second">
              <h4>Suggestions for you</h4>
              <img src={bag} alt="loading" />
            </div>
          </div>
          <div className="cards">
            <div className="img1">
              <img src={handbag2} alt="loading" />
            </div>
            <div className="img2">
              <img src={watch} alt="loading" />
            </div>
            <div className="img3">
              <img src={study} alt="loading" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
