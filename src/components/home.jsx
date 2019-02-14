import React, { Component } from 'react'; 
import Day from './day';
import { Route, Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="main-title">Sarajevo</h1>
        <div className="forecast-wrapper">
          <div className="current-weather">
            <h3>Current Weather - {this.props.currentWeather.time}</h3>
            <div className="current-weather-image-temperature">
              <img src={`https://openweathermap.org/img/w/${this.props.currentWeather.weatherIcon}.png`} />
              <span>{this.props.currentWeather.temperature}&#176;</span>
            </div>
            <h4>{this.props.currentWeather.forecast}</h4>
          </div>
          <div className="next-five-days">
            {this.props.days.map( day => (
              <Link to={`${day.urlPath}`} key={day.name} className="day-link">
                <Route 
                  exact 
                  path="/" 
                  render={props => <Day day={day.name} temp={day.temp} description={day.forecast} label={day.dateLabel} icon={day.weatherIcon} />} 
                />
              </Link>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;