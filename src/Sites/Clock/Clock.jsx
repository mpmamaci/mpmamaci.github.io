import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Clock.css';

class Clock extends Component {
  state = {
    time: 0,
    isLoading: true
  };

  async componentDidMount() {
    await this.callApi();
    setInterval(this.tick, 1000);
  }

  tick = () => {
    let currentTime = this.state.time;
    currentTime += 1000;

    let currentDate = new Date();
    currentDate.setTime(currentTime);

    const currentTimeString = currentDate.toLocaleTimeString();
    if (currentTimeString === '11:11:00') {
      this.setState({ time: currentTime, eleven: true });
    } else if (currentTimeString === '11:11:59') {
      this.setState({ time: currentTime, eleven: false });
    } else {
      this.setState({ time: currentTime, eleven: this.state.eleven });
    }
  };

  callApi = async () => {
    fetch('https://www.uhrzeit.org/time/sync.php', {
      method: 'GET'
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(json => {
        this.setState({ time: json.time, isLoading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ errors: { ...this.state.errors, serverError: true } });
      });
  };

  renderClock(time) {
    return (
      <div style={{ width: '35rem' }}>
        <CircularProgressbar
          className="title"
          styles={{
            path: {
              stroke: '#800080',
              transition: 'stroke-dashoffset 0.5s ease 0s'
            },
            text: {
              fill: 'white',
              fontSize: '1rem'
            }
          }}
          strokeWidth={5}
          percentage={100}
          text={time}
        />
      </div>
    );
  }

  render() {
    const { isLoading, time, eleven } = this.state;
    if (isLoading) return null;

    let currentDate = new Date();
    currentDate.setTime(time);

    return (
      <div className="Clock">
        <div className="container section">
          <p className="title is-large is-centered has-text-white">Atomuhr</p>
          {eleven === true ? (
            <p className="title is-centered has-text-white">liebe dich :)</p>
          ) : null}
          <div className="is-centered">{this.renderClock(currentDate.toLocaleTimeString())}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
