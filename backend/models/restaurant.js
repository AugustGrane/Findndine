const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {type: String, required: true, maxLength: 50 },
    address: {type: String, required: true, maxLength: 50},
    tags: [{type: String, maxLength: 25}]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);