import React, { useState } from 'react';
// import '../../../App.css';
import './SkateMap.css'


//Newapi key and base url to use as a object
const Newapi = {
  key: "a7140b1e30f0e6fbe981e3547de16601",
  base:"https://api.openweathermap.org/data/2.5/"
}

export default function SkateMap() {
  //setState
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // search function
  console.log(query)
  const search = evt =>{
    if(evt.key === 'Enter'){
      fetch(`${Newapi.base}weather?q=${query}&units=imperial&APPID=a7140b1e30f0e6fbe981e3547de16601`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(query)
        console.log(result)
      })
    }
  }


  //day and month array
  const dateBuilder = (d) => {
    let months = [ 'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October',
      'November', 'December'];

    let days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]  

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }



  return (
    //the background that will go from hot to cold
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'weather warm' : 'weather') : 'weather'}>
      <main>
        <div className="search-box123">
        <input
          type='text'
          className='search-bar123'
          placeholder='Search...'
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        </div>
        {(typeof weather.main != 'undefined') ? (
         <div>
           <div className='location-box'>
            <div className='location'>{weather.name},{weather.sys.country} </div>
          <div className='date'>{dateBuilder(new Date())}</div>
         </div>
          <div className ='forcast-box'>
         <div className = 'temp'>
         {Math.round(weather.main.temp)}°f
         </div>
           <div className='forcast'>
           {weather.weather[0].main}
         </div>
           </div>
         </div>
        
        ) : ('')}
      </main>
    </div>
  ) ;
  
}
