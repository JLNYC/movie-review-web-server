const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/get-review", (req, res) => {
    res.send("GET Endpoint for Reviews");
});

router.post("/create-review", (req, res) => {
    res.send("POST Endpoint for Reviews");
});

module.exports = router;
