const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);
