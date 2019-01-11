import React, { Component } from 'react';
import './App.css';
import './css/day.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import DayDetails from './components/daydetails';

class App extends Component {
  state = {
    days: [
      { id: 1, name: "Monday"},
      { id: 2, name: "Tuesday"},
      { id: 3, name: "Wednesday"},
      { id: 4, name: "Thursday"},
      { id: 5, name: "Friday"},
      { id: 6, name: "Saturday"},
      { id: 7, name: "Sunday"},
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="weather-app">
            <Route exact path="/" component={Home} />
            {this.state.days.map(day =>
              <Route path="/days/:id" render={props => <DayDetails day="Monday" />} />
            )} 
          </div>
        </Router>
        <footer>
          <small>
            Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin </a> 
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
          </small>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
