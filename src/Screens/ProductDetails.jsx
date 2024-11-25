import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import the CartContext
import all_product from "../Assets/all_product";
import Navbar from "../components/Navbar";
import "./ProductDetails.css"; // Import external CSS
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Access the addToCart function

  useEffect(() => {
    const foundProduct = all_product.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add the product to the cart
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <> <Navbar /><div className="product-details-page">
   
    <div className="product-container">
      {/* Left: Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Right: Product Details */}
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-category">Category: {product.category}</p>

        {/* Ratings and Reviews */}
        <div className="product-ratings">
          <span className="rating">4.5 ★</span>
          <span className="reviews">(234 Ratings & 50 Reviews)</span>
        </div>

        {/* Pricing */}
        <div className="product-pricing">
          <span className="new-price">₹{product.new_price}</span>
          <span className="old-price">₹{product.old_price}</span>
          <span className="discount">
 {Math.floor(((product.old_price - product.new_price) / product.old_price) * 100)}%off
</span>
        </div>

        {/* Additional Info */}
        <div className="product-details">
          <p><strong>Description:</strong> {product.name}</p>
        </div>

        {/* Buttons */}
        <div className="product-actions">
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div><Footer/>
    </>
  );
};

export default ProductDetails;
