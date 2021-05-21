const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IdXMFSCvOGSJ1OELE9g5ujUY7rJNRiSU6CpKBIu21XrfcE36c8LpN6y9X6Eqql2b6899cQVlIpZ89mcAfDFgRKQ00o2qOfYr8");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/",(req,res) => res.status(200).send("hello"));

app.post("/payments/create",async (req, res) => {
    const total = req.query.total;
    console.log("Payment Request recieved", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr"
    });

    // OK_CREATED
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)
