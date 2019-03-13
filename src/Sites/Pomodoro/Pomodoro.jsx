import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import promodoro from '../../resources/svg/tomato.svg';
import BottomLinks from '../../App/Links/Links';
import StyledProgressbar from './StyledProgessbar';
import 'bulma/css/bulma.css';
import '../../utils/helpers.scss';

function tick() {
  const percentage = 50;
  const timeElement = <StyledProgressbar strokeWidth={5} percentage={percentage} />;
  ReactDOM.render(timeElement, document.getElementById('tick'));
}

class Pomodoro extends Component {
  state = {
    intervallId: 0
  };

  componentDidMount() {
    document.title = 'Pomodoro Timer';
    this.setState({ intervallId: setInterval(tick, 1000) });
    tick();
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
            <div id="tick" className="column is-9 is-centered" />
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
