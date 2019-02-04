import React, { Component } from 'react';
import '../css/day.css';

class Day extends Component {
  render() {
    const icon = `https://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div className="day">
        <p>{this.props.day}</p>
        <p className="date-label">{this.props.label}</p>
        <img src={icon} width="60px" height="60px" alt="Weather Icon" />
        <p>
          {this.getTemperature(this.props.temp)}<span>&#176;</span>
        </p>
        <p className="weather-status">{this.props.description}</p>
      </div>
    )
  }

  getTemperature(temp) {
    return Math.round(temp);
  }
}

export default Day;