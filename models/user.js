const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  currentLine: String,
  motivationalLine: String,
  keepInMind: String,
  registeredDate: { type: Date, default: Date.now },
  favoriteSpots: { type: Array }, // Stored as longitude and latitude. An array of objects.
  trackedSpot: { type: Array } // Stored as longitude and latitude.
});

module.exports = User = mongoose.model("users", UserSchema);