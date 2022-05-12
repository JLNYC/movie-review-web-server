const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
    firstName: String,
    lastName: String,
    reviewTotal : Number,
    expertLevel: String,
    favMovies: [String],
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('User', User);
