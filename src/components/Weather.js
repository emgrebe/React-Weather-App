import React from 'react';

class Weather extends React.Component {
  render() {
    return(
      <div className="Weather">
        <p>Temperature: </p>
        <p>The Low Today is: </p>
        <p>The High Today is: </p>
        <p>Humidity: </p>
        <p>Wind Speeds: </p>
        <p>Conditions: </p>
        <p>Error: </p>
      </div>
    )
  }
}

export default Weather;