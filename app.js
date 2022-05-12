require('dotenv').config()
require("./utils/db.js");

const express = require("express");

const app = express();

// Routes
const movieRoutes = require("./routes/movie");
const reviewRoutes = require("./routes/review");
const userRoutes = require("./routes/user");
const tmdbServiceRoutes = require("./routes/tmdbService");

// Middlewares
app.use(userRoutes);
app.use(movieRoutes);
app.use(reviewRoutes);
app.use(tmdbServiceRoutes);

// Server Start
app.listen(3000, () => {
    console.log("server is running...");
});
