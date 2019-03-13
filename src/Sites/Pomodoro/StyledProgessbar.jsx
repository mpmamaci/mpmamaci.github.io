import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bulma/css/bulma.css';

class StyledProgressbar extends Component {
  state = {
    percentage: 0
  };

  render() {
    const { percentage, strokeWidth } = this.props;
    return (
      <div style={{ width: '35rem' }}>
        <CircularProgressbar
          className="title"
          styles={{
            path: {
              stroke: '#d74141',
              transition: 'stroke-dashoffset 0.5s ease 0s'
            },
            text: {
              fill: '#d74141',
              fontSize: '1rem'
            }
          }}
          strokeWidth={strokeWidth}
          percentage={percentage}
          text={new Date().toLocaleTimeString()}
        />
      </div>
    );
  }
}

export default StyledProgressbar;
