const mongoose = require("mongoose");
const { Schema } = mongoose;

const Movie = new Schema({
    tmdbId: String,
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Movie', Movie);