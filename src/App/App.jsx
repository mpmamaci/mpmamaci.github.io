/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import promodoro from '../resources/tomato.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          titel="designed by Freepik from Flaticon"
          src={promodoro}
          className="App-logo"
          alt="logo"
        />
        <h6>designed by Freepik from Flaticon</h6>
        <a
          className="App-link"
          href="http://tomato-timer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Pomodoro Timer</p>
        </a>
      </header>
    </div>
  );
}

function chiffre() {
  return <div />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/mc2/" component={chiffre} />
      </div>
    </Router>
  );
}

export default AppRouter;
