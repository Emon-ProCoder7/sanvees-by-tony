import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, showPurchaseButton = true }) => {
  const handlePurchaseClick = (e) => {
    e.preventDefault();
    window.open(product.orderLink, '_blank');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          <div className="product-overlay">
            <button className="quick-view-btn">Quick View</button>
          </div>
        </div>
        
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">{product.price}</div>
          
          {showPurchaseButton && (
            <button 
              className="btn btn-primary purchase-btn"
              onClick={handlePurchaseClick}
            >
              Purchase Now
            </button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;