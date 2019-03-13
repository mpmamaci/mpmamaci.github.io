import React, { Component } from 'react';
import Pomodoro from '../Sites/Pomodoro/Pomodoro';
import Cipher from '../Sites/MC2/Chiper';
import AppRouter from './AppRouter';
import './App.css';
import 'bulma/css/bulma.css';

const BottomLinks = () => (
  <div className="columns">
    <a className="App-link column" href="#/">
      Home
    </a>
    <a
      className="App-link column"
      href="http://tomato-timer.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pomodoro Timer
    </a>
    <a className="App-link column" href="#/mc2">
      Advanced Vigenere
    </a>
  </div>
);

class App extends Component {
  state = {
    components: [
      {
        path: '/',
        component: Pomodoro
      },
      {
        path: '/mc2',
        component: Cipher
      }
    ]
  };

  render() {
    return <AppRouter routes={this.state.components} />;
  }
}

export default App;

export { BottomLinks };
