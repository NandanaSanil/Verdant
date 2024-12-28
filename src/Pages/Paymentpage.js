import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Paymentpage() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // Stripe.js hasn't loaded yet
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // Call your backend to confirm the payment
      alert("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Page</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default Paymentpage;
