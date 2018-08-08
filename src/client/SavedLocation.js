import React from 'react';
import './app.css';


const SavedLocation = (props) => (
  <div className="feature">
    {
      props.data.forecast === 'Clouds'
        ? <img className="saved-location-image" style={{ "marginBottom": "-1rem" }} src={'https://img.clipartxtras.com/21f962d818134a5b5c3d22945ed72de5_sunny-clipart-transparent-clipartxtras-sunny-clipart-transparent_300-300.png'} />
        : <img className="saved-location-image" style={{ "marginBottom": "-1rem" }} src={'https://cdn.iconscout.com/public/images/icon/free/png-512/bad-weather-clouds-rain-snow-storm-lightning-36dbfb907f7f0238-512x512.png'} />
    }
    <p className="card-title">{props.data.name} - {props.data.zipcode}</p>
    <p>Forecast: {props.data.forecast}</p>
    <p>Temperature: {props.data.temperature}°</p>
    <p>Humidity: {props.data.humidity}%</p>

  </div>
)
export default SavedLocation;
