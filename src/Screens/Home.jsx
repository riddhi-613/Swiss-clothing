import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import all_product from "../Assets/all_product.js"; // Import your products
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="card-grid">
        {all_product.map((product) => (
          <Card
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            newPrice={product.new_price}
            oldPrice={product.old_price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
