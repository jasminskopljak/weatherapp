import React, { Component } from 'react'; 
import Day from './day';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Mon" weather="sunny" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Tue" weather="clody" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Wed" weather="rainy" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Thu" weather="electricalstorm" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Fri" weather="snow" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Sat" weather="windy" />} 
          />
        </Link>
        <Link to="/daydetails" className="day-link">
          <Route 
            exact 
            path="/" 
            render={props => <Day day="Sun" />} 
          />
        </Link>
      </React.Fragment>
    )
  }
}

export default Home;