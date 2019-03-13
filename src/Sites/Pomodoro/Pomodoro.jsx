import React, { Component } from 'react';
import promodoro from '../../resources/svg/tomato.svg';
import BottomLinks from '../../App/Links/Links';
import 'bulma/css/bulma.css';

class Pomodoro extends Component {
  componentDidMount() {
    document.title = 'Pomodoro Timer';
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img
              titel="designed by Freepik from Flaticon"
              src={promodoro}
              className="App-logo"
              alt="logo"
            />
            <p className="section subtitle is-small">designed by Freepik from Flaticon</p>
            <BottomLinks />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Pomodoro;
