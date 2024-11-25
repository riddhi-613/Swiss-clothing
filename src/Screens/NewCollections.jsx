import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import new_collections from "../Assets/new_collections"; // Import the new collections
import "./NewCollections.css"; // Add styles for the grid

const NewCollections = () => {
    console.log(new_collections);
  return (
    <div>
      <Navbar />
      <h2 className="new-collections-title">New Collections</h2> {/* Title for the collections */}
      <div className="card-grid">
        {new_collections.map((product) => (
          <Card
           
            id={product.id}
            name={product.name}
            image={product.image}
            category="New Collections"
            newPrice={product.new_price}
            oldPrice={product.old_price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NewCollections;
