import React, { Component } from 'react';
import './App.css';
import './css/day.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import LoadingSpinner from './images/loading.gif';
// import DayDetails from './components/daydetails';

const APIKEY = 'OPEN WEATHER - APIKEY';
const API = 'http://api.openweathermap.org/data/2.5/forecast?q=';
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
          dateLabel: null 
        }
      ],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    fetch(`${API}${city},${countryCode}&units=metric&APPID=${APIKEY}`)
      .then(response => response.json())
      .then( (result) => {
        this.setState({
          isLoaded: true,
          nextFiveDays: this.nextFiveDays(result.list)
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
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
            <Route exact path="/" render={ props => <Home days={this.state.nextFiveDays} /> } />
            {/*<Route path="/:day" component={DayDetails} />*/}
          </div>
        </Router>
        <footer>
          <small>
            Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin </a> 
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"> CC 3.0 BY</a>
          </small>
        </footer>
      </React.Fragment>
    );
  }

  nextFiveDays(list) {
    let days = [];
    list.forEach( (timeslot) => {
      let obj = {};
      let date = new Date(timeslot.dt*1000);
      let time = date.toLocaleString('en-US', { hour: 'numeric' });
      let day = date.toLocaleString('en-US', { weekday: 'long' });
      let dateLabel = date.toLocaleString('en-US', {day: 'numeric', month: 'short'});
      let index = days.findIndex(x => x.name === day);

      if (index === -1) {
        obj.name = day;
        obj.urlPath = day.toLowerCase();
        obj.dateLabel = dateLabel;
        if (time === '1 PM') {
          obj.forecast = timeslot.weather[0].main;
          obj.temp = timeslot.main.temp;
          days.push(obj);
        }
      }
    });
    return days;
  }
}

export default App;
