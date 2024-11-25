import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import "./Card.css";

const Card = ({ id, name, image, category, newPrice, oldPrice }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart function

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the parent div
    addToCart({
      id,
      name,
      image,
      category,
      new_price: newPrice,
      old_price: oldPrice,
      quantity: 1, // Initially set quantity to 1
    });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <p className="card-category">Category:{category.toUpperCase()}</p>
        <div className="card-prices">
          <span className="new-price">₹{newPrice.toFixed(2)}</span>
          <span className="old-price">₹{oldPrice.toFixed(2)}</span>
        </div>
        {/* Add to Cart Button */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
