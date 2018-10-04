const express = require("express");
const bodyParser = require("body-parser");

const candyService = require("./services/CandyService");
const pinataService = require("./services/PinataService");
const offerService = require("./services/OfferService");
const port = 5500;

const app = express();

app.use(bodyParser.json());

// GET - gets all candies
app.get("/api/candies", (req, res) => {
    return res.json(candyService.getAllCandies());
});

// POST - creates a new candy
app.post("/api/candies", (req, res) => {
    const body = req.body;
    return res.status(201).json(candyService.createCandy(body));
});

// GET - gets a candy by ID
app.get("/api/candies/:id", (req, res) => {
    const result = candyService.getCandyById(req.params.id);

    if (result === -1) {
        return res.status(404).send();
    }

    return res.json(result);
});

// GET - gets all offers
app.get("/api/offers", (req, res) => {
  const result = offerService.getAllOffers();
    return res.json(result);
});

// GET - gets all pinatas
app.get("/api/pinatas", (req, res) => {
    return res.json(pinataService.getAllPinatas());
});

// GET - gets pinata by ID
app.get("/api/pinatas/:id", (req, res) => {
  const result = pinataService.getPinataById(req.params.id);

  if(result === -1) {
    return res.status(404).send();
  }
    return res.json(result);
});

// POST - creates a new pinata
app.post("/api/pinatas", (req, res) => {
    const body = req.body;
    return res.status(201).json(pinataService.createPinata(body));
});

// PUT - hits a pinata by ID and therefore lowers score tolerance
app.put("/api/pinatas/:id/hit", (req, res) => {
    const resData = pinataService.hitPinataById(req.params.id);
    if(resData === -1) {
        return res.status(423).send();
    } else if (resData === 0) {
        return res.status(404).send();
    } else if (resData === 1) {
        return res.status(204).send();
    } else {
        return res.json(resData);
    }
});


// listens to port with factoral function
app.listen(port, () => {
    console.log("server is listening to port " + port);
});
