import React, { useState } from "react";
import "./Contact.css"; // Import the CSS for styling
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send feedback data to the backend
    try {
      const response = await fetch("http://localhost:5000/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully!");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback");
    }

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="contact-page">
      

      {/* Contact Details Section */}
      <div className="contact-details">
        <h2>Our Details</h2>
        <p>
          <strong>Address:</strong> Thapar University
        </p>
        <p>
          <strong>Phone:</strong> +91 8427472911
        </p>
        <p>
          <strong>Email:</strong> riddhisekhri1334@gmail.com
        </p>
      </div>

      
    </div></>
  );
};

export default Contact;
