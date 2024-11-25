import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    try {
      // Call backend to create PaymentIntent
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice * 100 }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card },
      });

      if (result.error) {
        console.error("Payment failed:", result.error.message);
        alert("Payment failed. Please try again.");
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
        // Redirect or save order details
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${totalPrice.toFixed(2)}
      </button>
    </form>
  );
};

export default CheckoutForm;
