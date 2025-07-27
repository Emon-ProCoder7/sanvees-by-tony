import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const foundProduct = getProductById(productId);
    setProduct(foundProduct);
    
    if (foundProduct) {
      setSelectedImage(foundProduct.image);
      
      // Get related products from the same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);

  const handlePurchase = () => {
    if (product?.orderLink) {
      window.open(product.orderLink, '_blank');
    }
  };

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product not found</h2>
            <Link to="/all-products" className="btn btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category.replace(' ', '')}`}>
            {product.category}
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="product-details-grid">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={selectedImage} 
                alt={product.name}
                className="detail-image"
              />
            </div>
          </div>

          <div className="product-info-detail">
            <div className="product-category-badge">{product.category}</div>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price-large">{product.price}</div>
            
            <div className="product-description">
              <h3>Product Details</h3>
              <p>
                Elegant and sophisticated {product.name.toLowerCase()} from our {product.category.toLowerCase()} collection. 
                Crafted with attention to detail and designed for the modern woman who values style and comfort.
              </p>
              
              <ul className="product-features">
                <li>Premium quality materials</li>
                <li>Comfortable fit</li>
                <li>Easy care instructions</li>
                <li>Available for immediate delivery</li>
              </ul>
            </div>

            <div className="product-actions">
              <button 
                className="btn btn-primary purchase-btn-large"
                onClick={handlePurchase}
              >
                Purchase Now - {product.price}
              </button>
              
              <div className="product-meta">
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Product ID:</strong> #{product.id}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2 className="section-title">Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;