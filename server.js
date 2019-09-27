const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const stripe = require("stripe")(process.env.SK_TEST);

(async() => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'usd',
      source: 'tok_visa',
      receipt_email: 'jenny.rosen@example.com',
    });
    console.log(charge)
  })();

//setting time out
stripe.setTimeout(200000); // in ms (currently set to 200sec)

// Retry a request twice before giving up
stripe.setMaxNetworkRetries(2);

app.get("/", (req, res) => {
  res.send(`server is running`);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
