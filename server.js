const stripe  = require ('stripe')(process.env.SK_TEST);
const dotenv = require('dotenv').config()
const customer = await stripe.customers.create({
    email: 'customer@example.com',
});
//Enables API key to be read from .evn files
const result = dotenv.config()
if (result.error) {
    throw result.err
}
console.log(result.parsed)

// Retrieve the balance for a connected account:
stripe.balance
  .retrieve({
    stripe_account: 'acct_foo',
  })
  .then((balance) => {
    // The balance object for the connected account
  })
  .catch((err) => {
    // Error
  });

//setting time out
stripe.setTimeout(200000); // in ms (currently set to 200sec) 

// Retry a request twice before giving up
stripe.setMaxNetworkRetries(2);