import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { jsPDF } from "jspdf";
import "./Cart.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate(); 
  
  const { cart, removeFromCart,clearCart } = useCart(); // Access cart and removeFromCart

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.new_price * item.quantity,
    0
  );

  // Handle Confirm Order button
  
  const handleConfirmOrder = () => {
 
    generateBill(); // Assuming this generates the bill
   
    navigate("/");
    clearCart();
   // Clear the cart
    // Return to home page
  };

  // Function to generate and download the bill
  const generateBill = () => {
    const doc = new jsPDF();
    doc.setFontSize(12); // Set font size
    let yPosition = 20; // Starting Y position
    
    const lineHeight = 8; // Line height to prevent overlap
    const marginLeft = 20; // Margin from the left side
    
    // Add title to the bill
    doc.text("Invoice", marginLeft, yPosition);
    yPosition += 10; // Add space after title
    
    // Add items to the bill
    cart.forEach((item) => {
      // Item Name
      doc.text(`Item: ${item.name}`, marginLeft, yPosition);
      yPosition += lineHeight; // Increase the Y position after item name
      
      // Price
      doc.text(`Price: ${item.new_price}`, marginLeft, yPosition);
      yPosition += lineHeight; // Increase the Y position after price
      
      // Quantity
      doc.text(`Quantity: ${item.quantity}`, marginLeft, yPosition);
      yPosition += lineHeight; // Increase the Y position after quantity
      
      // Add extra space between items
      yPosition += 5;
    });
  
    // Add the total price to the bill
    doc.text(`Total: ${totalPrice.toFixed(2)}`, marginLeft, yPosition);
  
    // Save the bill as a PDF file
    doc.save("bill.pdf");
  };
  
  

  return (
    <> <Navbar />
    <div className="cart-container">
     
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-price">
                    Price: ₹{item.new_price.toFixed(2)}
                  </p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h2 className="cart-total">Total: ₹{totalPrice.toFixed(2)}</h2>
            <button className="cart-confirm-order" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>
        </>
      )}
      
    </div>
   </>
  );
};

export default Cart;
