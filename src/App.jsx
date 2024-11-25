import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import ProductDetails from "./Screens/ProductDetails";
import Cart from "./Screens/Cart";
import LoginPage from "./Screens/LoginPage";
import SignupPage from "./Screens/SignupPage";
import { AuthProvider } from "./context/AuthContext"; // AuthContext for authentication
import { CartProvider } from "./context/CartContext"; // CartContext for managing the cart
import NewCollections from "./Screens/NewCollections"; 
import Success from "./Screens/Success";
import Cancel from "./Screens/Cancel";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
const App = () => {
  return (
    <AuthProvider>
      <CartProvider> {/* Wrap with CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/new-collections" element={<NewCollections />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
