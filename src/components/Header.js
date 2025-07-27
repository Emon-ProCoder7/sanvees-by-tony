import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Sanvees By Tony</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/all-products" className="nav-link">All Products</Link>
            <Link to="/category/newOffers" className="nav-link">New Offers</Link>
            
            <div 
              className="dropdown"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <span className="nav-link dropdown-trigger">
                Categories
                <span className="dropdown-arrow">▼</span>
              </span>
              
              {isCategoriesOpen && (
                <div className="dropdown-menu">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category.name.replace(' ', '')}`}
                      className="dropdown-item"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;