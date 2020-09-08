const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const spotSchema = new Schema({
  coords: { type: Array, required: true }, // Stored as longitude and latitude.
  spotName: { type: String, required: true },
  currentLine: String,
  motivationalLine: String,
  keepInMind: String,
});

spotSchema.plugin(passportLocalMongoose);

const Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;

// use sessions to check if user is logged in order to display the correct information/ page.
// 