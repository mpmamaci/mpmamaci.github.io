import React, { Component } from 'react';
import Home from '../Sites/Home/Home';
import Cipher from '../Sites/MC2/Chiper';
import Clock from '../Sites/Clock/Clock';
import AppRouter from './AppRouter';
import '../Sites/Pomodoro/Pomodoro.css';
import 'bulma/css/bulma.css';
import Licenses from './Licenses';

class App extends Component {
  state = {
    components: [
      {
        path: '/',
        component: Cipher//Home
      },
      // {
      //   path: '/pomodoro',
      //   component: Pomodoro
      // },
      {
        path: '/mc2',
        component: Cipher
      },
      {
        path: '/licenses',
        component: Licenses
      },
      // {
      //   path: '/clock',
      //   component: Clock
      // }
    ]
  };

  render() {
    return <AppRouter routes={this.state.components} />;
  }
}

export default App;
