import axios from "axios";

export default {
    // API KEY  0e2be3afb35a7a6d862acc7f9115708e 

  // Gets all spots
  getWeather: function() {
    return axios.get("api.openweathermap.org/data/2.5/forecast?zip={32712},{us}&appid={0e2be3afb35a7a6d862acc7f9115708e}");
  },
}




