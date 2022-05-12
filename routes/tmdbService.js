const express = require("express");
const router = express.Router();

router.get("/getMovieGenres", (req, res) => {
    res.send("GET Endpoint for TMDB");
});

router.get("/findMovieById", (req, res) => {
    res.send("GET Endpoint for TMDB");
});

router.get("/findMoviesByKeyword", (req, res) => {
    res.send("GET Endpoint for TMDB");
});

router.get("/getNowPlaying", (req, res) => {
    res.send("GET Endpoint for TMDB");
});

module.exports = router;
