import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    windSpeed: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`)
    const response = await api_call.json()
    console.log(response)
    if( city && country) {
      this.setState=({
        //Math.trunc removed the decimal part of an integer
        // temperature: Math.trunc((response.main.temp - 273.15)*(1.8)+32),
        // tempLow: Math.trunc((response.main.temp_min - 273.15)*(1.8)+32),
        // tempHigh: Math.trunc((response.main.temp_max - 273.15)*(1.8)+32),
        // windSpeed: response.wind.speed,
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState=({
        error: "Please input search values..."
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Form
          loadWeather={this.getWeather}
        />
        <Weather />
      </div>
    )
  }
}

export default App;