const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/get-user", (req, res) => {
    res.send("GET Endpoint for User");
});

router.post("/create-user", (req, res) => {
    res.send("POST Endpoint for User");
});

module.exports = router;
