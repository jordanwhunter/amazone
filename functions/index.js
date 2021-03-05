const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(`${process.env.REACT_APP_STRIPE_SECRET_KEY}`);

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/ama-zone/us-central1/api
