import React, { Component } from 'react';
import Cipher from '../Sites/MC2/Chiper';
import AppRouter from './AppRouter';
import '../Sites/Pomodoro/Pomodoro.css';
import 'bulma/css/bulma.css';
import Licenses from './Licenses';
import PasswordGenerator from '../Sites/PasswordGenerator/PasswordGenerator';

class App extends Component {
  state = {
    components: [
      {
        path: '/',
        component: Cipher //Home
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
      {
        path: '/passwd',
        component: PasswordGenerator
      }
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
