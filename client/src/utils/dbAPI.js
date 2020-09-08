import axios from "axios";

export default {
  // Gets all spots
  getSpots: function() {
    return axios.get("/api/spots");
  },
  // Gets the spot with the given id
  getSpot: function(id) {
    return axios.get("api/spots/" + id);
  },
  // Deletes the book with the given id
  deleteSpot: function(id) {
    return axios.delete("/api/spots/" + id);
  },
  // Saves a book to the database
  saveSpot: function(spotData) {
    return axios.post("/api/spots", spotData);
  },

  // Gets all skate spots for zipcode (preseeded at the moment for 32712 skateparks)
  getParks: function() {
      return axios.get("/api/parks");
  },
  getPark: function(id) {
      return axios.get("/api/parks/" + id);
  },

  // Get all users
  getUsers: function() {
    console.log("Testing")
    return axios.get("/api/testdetails");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  }
};