const express = require('express');
const os = require('os');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const axios = require('axios');
const { temp } = require('./utils')
const { timeAndDateConverter } = require('./utils')
const { timeConverter } = require('./utils')

const app = express();
app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/stuff', (req, res, next) => {
  console.log('hitting the proper route')
  res.send({data: 'hellloooo'});
})

app.get('/api/currentweather/:zipcode', async (req, res, next) => {
  try {
    const { zipcode } = req.params;
    const params = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=df18e86207417aea17177cb74327592c`;
    const response = await axios.get(params)
    const parsedData = parseData(response.data, zipcode)
    res.send(parsedData)
  } catch (err) {
    console.log(err)
  }
})


function parseData(data, zipcode) {
  const temperature = Math.floor(temp(data.main.temp))
  const humidity = data.main.humidity
  const forecast = data.weather[0].main
  const currentDate = timeAndDateConverter(data.dt)
  const sunrise = timeConverter(data.sys.sunrise)
  const sunset = timeConverter(data.sys.sunset)
  const name = data.name
  return {
    temperature, humidity, forecast, currentDate, sunrise, sunset, name, zipcode
  }
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(8080, () => console.log('Listening on port 8080!'));

module.exports = app;
