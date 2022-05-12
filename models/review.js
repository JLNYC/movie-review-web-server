const mongoose = require("mongoose");
const { Schema } = mongoose;

const Review = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    timeStamp: { type: Date, default: Date.now },
    rating: Number,
    title: String,
    comment: String
});

module.exports = mongoose.model('Review', Review);
