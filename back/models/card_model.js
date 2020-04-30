const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: String,
    number: String,
    expiry: String,
    cvc: String
});

module.exports = mongoose.model('card_model', cardSchema);