const express = require("express");
const router = express.Router();

router.get("/get-movie", (req, res) => {
    res.send("GET Endpoint for Movies");
});

module.exports = router;
