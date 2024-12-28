const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe("YOUR_SECRET_KEY");

const app = express();
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

app.listen(3000, () => console.log("Server running on port 3000"));
