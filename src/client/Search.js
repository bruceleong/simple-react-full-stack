'use strict';
import React, { Component } from 'react';
import axios from 'axios';
import SavedLocations from './SavedLocation';
import CurrentWeather from './CurrentWeather';
import { nyData, portlandData, sanMateoData, weatherPuns } from './utils';
import './app.css';



export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      currentWeatherData: {},
      isSearching: false,
      hasSearched: false,
      savedLocations: [],
      currentPun: ''
    }
  }

  componentDidMount() {
    //seeding small amounts of data
    this.getPun()
    this.setState({ savedLocations: [nyData, portlandData, sanMateoData] })
  }

  getPun = () => {
    const pun = weatherPuns[Math.floor(Math.random() * weatherPuns.length - 1) + 1]
    this.setState({
      currentPun: pun
    })
  }

  saveLocation = () => {
    this.setState({
      savedLocations: [...this.state.savedLocations, this.state.currentWeatherData],
      currentPun: ''
    })
    this.resetSearch()
  }

  clear = () => {
    this.setState({
      savedLocations: []
    })
  }

  resetSearch = evt => {
    this.getPun()
    this.setState({
      zipcode: '',
      currentWeatherData: {},
      isSearching: false,
      hasSearched: false,
      searchedLocation: ''
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    axios.get(`/api/currentweather/${this.state.zipcode}`)
    .then(res => res.data)
    .then(parsedData => this.setState({
      zipcode: '',
      currentWeatherData: parsedData
    }))

  }

  handleChange = evt => {
    const { value } = evt.target
    this.setState({ zipcode: value })
  }

  render() {
    let searchedData;
    if (this.state.currentWeatherData.currentDate) {
      searchedData = this.state.currentWeatherData
    }
    return (
      <div className="artist-search">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.zipcode}
            className='form'
            placeholder="Enter your zipcode"
          >
          </input>
          <button type="submit">Search</button>
          <br />
          <br />
        </form>
        <div>
          {
            searchedData === undefined
              ?
              <div>
                <h1>
                  Hey, how's your day going? Don't forget...
                  <br />
                  <br />
              {this.state.currentPun}
                </h1>
                <img style={{'width': '7rem', 'height': 'auto'}} src={'https://media.giphy.com/media/ulAjqv4pOfPOg/source.gif'} />
              </div>
              :
              <div>
                <div className="currentweather-card-container">
                  <h4>Would you like to save your location?</h4>
                  <button type="submit" onClick={() => { this.saveLocation() }}>Yes</button>
                  <button type="submit" onClick={() => { this.resetSearch() }}>No, Reset</button>
                  <CurrentWeather data={searchedData} />
                </div>
              </div>
          }
        </div>
        {
          this.state.savedLocations.length
            ?
            <div>
              <button type="submit" onClick={() => { this.clear() }}>Clear Saved Locations</button>
              <div className="feature-container">
                {
                  this.state.savedLocations.map(ele => {
                    return (
                      <div key={ele.zipcode}>
                        <SavedLocations data={ele} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            : ''
        }
      </div>
    )
  }
}
