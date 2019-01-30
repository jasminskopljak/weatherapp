import React, { Component } from 'react'; 
import Day from './day';
import { Route, Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="main-title">Sarajevo - Next Five Days</h1>
        <div className="forecast-wrapper">
          {this.props.days.map( day => (
            <Link to={`${day.urlPath}`} key={day.name} className="day-link">
              <Route 
                exact 
                path="/" 
                render={props => <Day day={day.name} temp={day.temp} description={day.forecast} label={day.dateLabel} />} 
              />
            </Link>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Home;