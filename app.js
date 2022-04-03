const express = require("express");

const app = express();

// Routes
const movieRoutes = require("./routes/movie");
const reviewRoutes = require("./routes/review");
const userRoutes = require("./routes/user");

// Middlewares
app.use(userRoutes);
app.use(movieRoutes);
app.use(reviewRoutes);

// Server Start
app.listen(3000, () => {
    console.log("server is running...");
});
