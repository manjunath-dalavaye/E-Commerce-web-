import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img className="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo Not found" />
      </div>
      <div className="nav-middle">
        <div className="search-container">
          <input type="search" className="search-bar" placeholder="Search product" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/passportz.jpeg`} alt="Not available" /> Diego Morata
          </li>
          <li>Chart</li>
          <li>Orders</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
