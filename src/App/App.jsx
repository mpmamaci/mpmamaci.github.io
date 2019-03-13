import React, { Component } from 'react';
import Pomodoro from '../Sites/Pomodoro/Pomodoro';
import Home from '../Sites/Home/Home';
import Cipher from '../Sites/MC2/Chiper';
import AppRouter from './AppRouter';
import './App.css';

class App extends Component {
  state = {
    components: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/pomodoro',
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
