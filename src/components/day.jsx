import React, { Component } from 'react';
import sunnyDay from '../images/sunny-day.svg';
import cloudyDay from '../images/cloudy-day.svg';
import electricalStormDay from '../images/electrical-storm-day.svg';
import rainyDay from '../images/rainy-day.svg';
import snowDay from '../images/snow-day.svg';
import windyDay from '../images/windy-day.svg';
import '../css/day.css'; 

class Day extends Component {
  render() {
    return (
      <div className="day">
        <p>{this.props.day}</p>
        <img src={this.getWeatherIcon()} width="60px" height="60px" alt="Weather Icon" />
        <p>
          20<span>&#176;</span>&nbsp;
          10<span>&#176;</span>
        </p>
      </div>
    )
  }

  getWeatherIcon() {
    let currentWeather = this.props.weather;
    let weatherStatus;

    switch (currentWeather) {
      case 'sunny':
        weatherStatus = sunnyDay;
        break;
      case 'cloudy':
        weatherStatus = cloudyDay;
        break;
      case 'electricalstorm':
        weatherStatus = electricalStormDay;
        break;
      case 'rainy':
        weatherStatus = rainyDay;
        break;
      case 'snow':
        weatherStatus = snowDay;
        break;
      case 'windy':
        weatherStatus = windyDay;
        break;
      default:
        weatherStatus = cloudyDay;
    }

    return weatherStatus;
  }
}

export default Day;