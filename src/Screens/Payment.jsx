import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm"; // Checkout form component

const stripePromise = loadStripe("your-publishable-key");

const Payment = () => {
  const location = useLocation();
  const { totalPrice } = location.state; // Get total price from state

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p>Total Amount: ${totalPrice.toFixed(2)}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;
