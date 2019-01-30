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
        <p className="date-label">{this.props.label}</p>
        <img src={this.getWeatherIcon()} width="60px" height="60px" alt="Weather Icon" />
        <p>
          {this.getTemperature(this.props.temp)}<span>&#176;</span>
        </p>
        <p className="weather-status">{this.props.description}</p>
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

  getTemperature(temp) {
    return Math.round(temp);
  }
}

export default Day;