import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import axios from 'axios';
import promodoro from '../../resources/svg/tomato.svg';
import BottomLinks from '../../App/Links/Links';
import '../../App/Links/Links.scss';
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
    timer: '',
    changedFocusTimer: 0,
    changedPauseTimer: 0
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
        startPauseTime: response.data.pauseTimer.startTime,
        changedFocusTimer: response.data.focusTimer.startTime,
        changedPauseTimer: response.data.pauseTimer.startTime,
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

  handleChange = event => {
    if (event.target.value >= 0) this.setState({ [event.target.name]: event.target.value * 60 });
  };

  handleSubmitButton = async event => {
    if (event.target.name === 'startFocusTimer') {
      var path = '/api/timer/focus/start';
      var time = this.state.changedFocusTimer;
    } else if (event.target.name === 'startPauseTimer') {
      path = '/api/timer/pause/start';
      time = this.state.changedPauseTimer;
    }
    await axios.get(process.env.REACT_APP_BASE_URL + '/api/timer/stop');
    await axios
      .post(process.env.REACT_APP_BASE_URL + path, {
        time: time / 60
      })
      .then(response => {
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
          startPauseTime: response.data.pauseTimer.startTime,
          changedFocusTimer: response.data.focusTimer.startTime,
          changedPauseTimer: response.data.pauseTimer.startTime,
          timer: timer
        });
      });
    window.location.reload();
  };

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
              <div className="is-centered">
                <Popup
                  trigger={<button className="btn box">Options</button>}
                  modal
                  closeOnDocumentClick
                >
                  <div className="columns p-sm">
                    <div className="column">
                      <h1 className="subtitle is-4">Focus Time:</h1>
                      <input
                        name="changedFocusTimer"
                        value={this.state.changedFocusTimer / 60}
                        onChange={this.handleChange}
                        className="input is-primary has-text-centered"
                        type="number"
                      />
                    </div>
                    <div className="column">
                      <h1 className="subtitle is-4">Pause Time:</h1>
                      <input
                        name="changedPauseTimer"
                        value={this.state.changedPauseTimer / 60}
                        onChange={this.handleChange}
                        className="input is-primary has-text-centered"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="columns">
                    <button
                      name="startFocusTimer"
                      className="button p-none column is-primary m-md"
                      onClick={this.handleSubmitButton}
                    >
                      Start Focus
                    </button>
                    <button
                      name="startPauseTimer"
                      className="button p-none column is-primary m-md"
                      onClick={this.handleSubmitButton}
                    >
                      Start Pause
                    </button>
                  </div>
                </Popup>
              </div>
            </div>
          </div>
          <BottomLinks />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
