import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Licenses extends Component {
  render() {
    return (
      <div className="section container">
        <span className="title is-1">Used Material:</span>
        <div className="section">
          <p className="is-3">Pomodoro SVG:</p>
          <p>designed by Freepik from Flaticon</p>
          <p>-----</p>
          <p className="is-3">Sound effect after the end of the timer:</p>
          <p> by Daniel Simion under CC license</p>
          <p>
            <a className="is-link" href="https://creativecommons.org/licenses/by/3.0/legalcode">
              License
            </a>
          </p>
          <p>
            <a className="is-link" href="http://soundbible.com/2197-Analog-Watch-Alarm.html">
              Source
            </a>
          </p>
          <p>-----</p>
        </div>
      </div>
    );
  }
}

export default Licenses;
