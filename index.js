const express = require("express");
const bodyParser = require("body-parser");

const candyService = require("./services/CandyService");
const port = 5500;

const app = express();

// GET - gets all candies
app.get("/api/candies", (req, res) => {
    return res.json();
});

// POST - creates a new candy
app.post("/api/candies", (req, res) => {
    return res.json();
});

// GET - gets a candy by ID
app.get("/api/candies/:id", (req, res) => {
    return res.json();
});

// GET - gets all offers
app.get("/api/offers", (req, res) => {
    return res.json();
});

// GET - gets all pinatas
app.get("/api/pinatas", (req, res) => {
    return res.json();
});

// GET - gets pinata by ID
app.get("/api/pinatas/:id", (req, res) => {
    return res.json();
});

// POST - creates a new pinata
app.post("/api/pinatas", (req, res) => {
    return res.json();
});

// PUT - hits a pinata by ID and therefore lowers score tolerance
app.put("/api/pinatas/:id/hit", (req, res) => {
    if(true) {
        return res.status(200).send();
    } else {
        return res.status(204).send();
    }
});


// listens to port with factoral function
app.listen(port, () => {
    console.log("server is listening to port");
});
