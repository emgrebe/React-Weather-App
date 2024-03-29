import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`);
    const response = await api_call.json();
    if( city && country ) {
      console.log(response);
      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: Math.trunc((response.main.temp - 273.15)*(1.8)+32),
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
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form
                  getWeather={this.getWeather}
                />
                <Weather
                city={this.state.city}
                country={this.state.country}
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;