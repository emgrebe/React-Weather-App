import React from 'react';

class Weather extends React.Component {
  render() {
    return(
      <div className="Weather">
        <p>Location: {this.props.city}, {this.props.country}</p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Wind Speeds: {this.props.windSpeed}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Conditions: {this.props.description}</p>
        <p>Error: {this.props.error}</p>
      </div>
    )
  }
}

export default Weather;