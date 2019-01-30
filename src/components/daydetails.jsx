import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DayDetails extends Component {
  render() {
    const day = this.props.match.params.day;
    return (
      <div>
        <h1>{day.toUpperCase()}</h1>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>1AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>2AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>3AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>4AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>5AM</td>
              <td>Awful</td>
            </tr>
            <tr>
              <td>6AM</td>
              <td>Awful</td>
            </tr>
          </tbody>
        </table>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    )
  }
}

export default DayDetails;