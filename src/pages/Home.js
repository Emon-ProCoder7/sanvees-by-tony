import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsBySection, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.slide-up');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const newOffers = getProductsBySection('newOffers').slice(0, 5);
  const sareeCollection = getProductsBySection('saree').slice(0, 5);
  const premiumCollection = getProductsBySection('premium').slice(0, 5);
  const cottonDresses = getProductsBySection('cotton').slice(0, 5);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">Embrace Your Style</h1>
          <p className="hero-subtitle">
            Discover elegance and sophistication with our curated collection of fashion-forward pieces
          </p>
          <Link to="/all-products" className="btn btn-primary hero-btn">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <h2 className={`section-title slide-up ${visibleSections['categories'] ? 'visible' : ''}`} id="categories">
            Shop by Category
          </h2>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.replace(' ', '')}`}
                className={`category-card slide-up ${visibleSections['categories'] ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Offers Section */}
      <section className="section">
        <div className="container">
          <h2 className={`section-title slide-up ${visibleSections['new-offers'] ? 'visible' : ''}`} id="new-offers">
            New Offers
          </h2>
          <div className="slideshow-container">
            <div className="product-slider">
              {newOffers.map((product, index) => (
                <div
                  key={product.id}
                  className={`slider-product slide-up ${visibleSections['new-offers'] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="view-all-btn">
            <Link to="/category/newOffers" className="btn btn-secondary">
              View All New Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Saree Collection */}
      <section className="section">
        <div className="container">
          <h2 className={`section-title slide-up ${visibleSections['saree'] ? 'visible' : ''}`} id="saree">
            Saree Collection
          </h2>
          <div className="slideshow-container">
            <div className="product-slider">
              {sareeCollection.map((product, index) => (
                <div
                  key={product.id}
                  className={`slider-product slide-up ${visibleSections['saree'] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="view-all-btn">
            <Link to="/category/Saree" className="btn btn-secondary">
              View All Sarees
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section className="section">
        <div className="container">
          <h2 className={`section-title slide-up ${visibleSections['premium'] ? 'visible' : ''}`} id="premium">
            Premium Collection
          </h2>
          <div className="slideshow-container">
            <div className="product-slider">
              {premiumCollection.map((product, index) => (
                <div
                  key={product.id}
                  className={`slider-product slide-up ${visibleSections['premium'] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="view-all-btn">
            <Link to="/category/PremiumCollection" className="btn btn-secondary">
              View All Premium Items
            </Link>
          </div>
        </div>
      </section>

      {/* Cotton Dresses */}
      <section className="section">
        <div className="container">
          <h2 className={`section-title slide-up ${visibleSections['cotton'] ? 'visible' : ''}`} id="cotton">
            Cotton Dresses
          </h2>
          <div className="slideshow-container">
            <div className="product-slider">
              {cottonDresses.map((product, index) => (
                <div
                  key={product.id}
                  className={`slider-product slide-up ${visibleSections['cotton'] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="view-all-btn">
            <Link to="/category/CottonDress" className="btn btn-secondary">
              View All Cotton Dresses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;