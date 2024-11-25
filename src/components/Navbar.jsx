import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import CartContext
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart(); // Get cart from CartContext

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { isAuthenticated, login, logout } = useAuth(); // Get authentication status

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Swiss Clothing</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/new-collections">New Collections</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/cart" className="navbar-cart">
          Cart {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>} {/* Show quantity if > 0 */}
        </Link>
        
        {/* Show Login or Logout button based on isAuthenticated */}
        {!isAuthenticated ? (
          <>
            <button className="navbar-button" onClick={login}>Login</button>
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>
        ) : (
          <button className="navbar-button" onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
