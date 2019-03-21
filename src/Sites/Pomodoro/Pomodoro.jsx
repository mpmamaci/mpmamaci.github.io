import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import promodoro from '../../resources/svg/tomato.svg';
import BottomLinks from '../../App/Links/Links';
import StyledProgressbar from './StyledProgessbar';
import 'bulma/css/bulma.css';
import '../../utils/helpers.scss';
import '../../utils/spacing.scss';

class Pomodoro extends Component {
  state = {
    intervallId: 0,
    focusTime: 0,
    startFocusTime: 0,
    pauseTime: 0,
    startPauseTime: 0,
    timer: ''
  };

  tick = timer => {
    if (timer === 'f') {
      const percentage = 100 - (100 * this.state.focusTime) / this.state.startFocusTime;
      const timeElement = (
        <StyledProgressbar time={this.state.focusTime} strokeWidth={5} percentage={percentage} />
      );
      ReactDOM.render(timeElement, document.getElementById('tick'));
      this.setState({
        focusTime: this.state.focusTime - 1
      });

      if (this.state.focusTime === -1) clearInterval(this.state.intervallId);
    } else if (timer === 'p') {
      const percentage = 100 - (100 * this.state.pauseTime) / this.state.startPauseTime;
      const timeElement = (
        <StyledProgressbar time={this.state.pauseTime} strokeWidth={5} percentage={percentage} />
      );
      ReactDOM.render(timeElement, document.getElementById('tick'));
      this.setState({
        pauseTime: this.state.pauseTime - 1
      });

      if (this.state.pauseTime === -1) clearInterval(this.state.intervallId);
    } else {
      console.log('juuup');
      const timeElement = <StyledProgressbar time={0} strokeWidth={5} percentage={0} />;
      ReactDOM.render(timeElement, document.getElementById('tick'));
    }
  };

  async componentDidMount() {
    document.title = 'Pomodoro Timer';
    await axios.get(process.env.REACT_APP_BASE_URL + '/api/timer/status').then(response => {
      if (response.data.focusTimer.runs) {
        var timer = 'f';
      } else if (response.data.pauseTimer.runs) {
        timer = 'p';
      } else {
        timer = 'none';
      }
      this.setState({
        focusTime: response.data.focusTimer.focusTime,
        pauseTime: response.data.pauseTimer.pauseTime,
        startFocusTime: response.data.focusTimer.startTime,
        startSauseTime: response.data.pauseTimer.startTime,
        timer: timer
      });
    });
    if (this.state.timer !== 'none') {
      this.setState({
        intervallId: setInterval(() => {
          this.tick(this.state.timer);
        }, 1000)
      });
      this.tick(this.state.timer);
    } else {
      clearInterval(this.state.intervallId);
      this.tick();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervallId);
  }

  render() {
    return (
      <div className="Pomodoro">
        <div className="container">
          <div className="container section">
            <h1 className="title is-1 has-text-white">Pomodoro Timer</h1>
          </div>
          <div className="columns is-10">
            <div id="tick" className="column m-lg is-9 is-centered" />
            <div className="column is-3">
              <img
                titel="designed by Freepik from Flaticon"
                src={promodoro}
                className="Pomodoro-logo"
                alt="logo"
              />
              <p className="section subtitle has-text-white is-small">
                designed by Freepik from Flaticon
              </p>
            </div>
          </div>
          <BottomLinks />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
