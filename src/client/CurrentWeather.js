import React from 'react';
import './app.css';


const CurrentWeather = (props) => (
  <div className="currentweather-card">
    <div>
      <p className="card-title">{props.data.name} - {props.data.zipcode}</p>
      <p>Date: {props.data.currentDate}</p>
      <p>Forecast: {props.data.forecast}</p>
      <p>Temperature: {props.data.temperature}°</p>
      <p>Humidity: {props.data.humidity}%</p>
      <p>Sunrise: {props.data.sunrise}</p>
      <p>Sunset: {props.data.sunset}</p>
    </div>
    <div>
      {
        props.data.forecast === 'Clouds'
          ? <img className="currentweather-image" style={{ "marginBottom": "-1rem" }} src={'https://vignette.wikia.nocookie.net/ecole-oraliste-eslvocabulary/images/e/e7/Raincloud_sun1.gif/revision/latest?cb=20150206220640'} />
          : <img className="currentweather-image" style={{ "marginBottom": "-1rem" }} src={'https://media.giphy.com/media/3ohhwsupwJyzktdgS4/source.gif'} />
      }
    </div>
  </div>
)
export default CurrentWeather;
