import React, { Component } from 'react';
import './App.css';
import './css/day.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import LoadingSpinner from './images/loading.gif';
// import DayDetails from './components/daydetails';

const APIKEY = '4d0c614a0cd30eaf90cffa2b1cf59b2b';
const NEXTFIVEDAYSAPIURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const CURRENTWEATHERAPIURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const city = 'Sarajevo';
const countryCode = 'ba';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextFiveDays: [
        {
          name: null,
          forecast: null,
          temp: null,
          urlPath: null,
          dateLabel: null,
          weatherIcon: null
        }
      ],
      currentWeather: {
        forecast: null,
        weatherIcon: null,
        temperature: null,
        time: null 
      },
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    let apiCallOne = fetch(`${NEXTFIVEDAYSAPIURL}${city},${countryCode}&units=metric&APPID=${APIKEY}`)
                      .then( (response) => response.json());

    let apiCallTwo = fetch(`${CURRENTWEATHERAPIURL}${city},${countryCode}&units=metric&APPID=${APIKEY}`)
                      .then( (response) => response.json());

    Promise.all([apiCallOne, apiCallTwo])
    .then((data) => {
      console.log(data);
      this.setState({
        isLoaded: true,
        nextFiveDays: this.nextFiveDays(data[0].list),
        currentWeather: { forecast: data[1].weather[0].description, weatherIcon: data[1].weather[0].icon, temperature: data[1].main.temp, time: this.getTimeFromUnixTimestamp(data[1].dt) }
      })
    },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <img src={LoadingSpinner} alt="Loading spinner" className="spinner"/>
      );
    }

    return (
      <React.Fragment>
        <Router>
          <div className="weather-app">
            <Route exact path="/" render={ props => <Home days={this.state.nextFiveDays} currentWeather={this.state.currentWeather} time={this.state.time} /> } />
            {/*<Route path="/:day" component={DayDetails} />*/}
          </div>
        </Router>
      </React.Fragment>
    );
  }

  nextFiveDays(list) {
    let days = [];
    list.forEach( (timeslot) => {
      let obj = {};
      let date = new Date(timeslot.dt*1000);
      let time = this.getTimeFromUnixTimestamp(timeslot.dt);
      let day = date.toLocaleString('en-US', { weekday: 'long' });
      let dateLabel = date.toLocaleString('en-US', {day: 'numeric', month: 'short'});
      let index = days.findIndex(x => x.name === day);

      if (index === -1) {
        obj.name = day;
        obj.urlPath = day.toLowerCase();
        obj.dateLabel = dateLabel;
        if (time === '1 PM') {
          obj.forecast = timeslot.weather[0].description;
          obj.temp = timeslot.main.temp;
          obj.weatherIcon = timeslot.weather[0].icon;
          days.push(obj);
        }
      }
    });
    return days;
  }

  getTimeFromUnixTimestamp(time) {
    let date = new Date(time*1000);
    return date.toLocaleString('en-US', { hour: 'numeric' });
  }
}

export default App;
