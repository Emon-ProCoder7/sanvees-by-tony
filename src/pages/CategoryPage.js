import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, getProductsBySection } from '../data/products';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let categoryProducts = [];
    
    // Handle special sections
    if (categoryName === 'newOffers') {
      categoryProducts = getProductsBySection('newOffers');
    } else {
      // Convert URL category name back to display name
      const displayName = categoryName.replace(/([A-Z])/g, ' $1').trim();
      categoryProducts = getProductsByCategory(displayName) || getProductsByCategory(categoryName);
    }

    // Sort products
    const sortedProducts = [...categoryProducts].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
        default:
          return 0;
      }
    });

    setProducts(sortedProducts);
  }, [categoryName, sortBy]);

  const getDisplayName = () => {
    if (categoryName === 'newOffers') return 'New Offers';
    return categoryName.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="category-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{getDisplayName()}</h1>
          <p className="page-subtitle">
            {products.length} beautiful pieces in this collection
          </p>
        </div>

        {/* Sort Controls */}
        <div className="sort-section">
          <div className="sort-group">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found in this category</h3>
            <p>Please check back later for new arrivals</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;