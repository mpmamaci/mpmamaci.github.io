import React, { Component } from 'react';
import BottomLinks from '../../App/Links/Links';
import 'bulma/css/bulma.css';
import './Home.css';
import '../../utils/spacing.scss';

const homePicture = require('../../resources/img/home-view.jpeg');

class Home extends Component {
  componentDidMount() {
    document.title = 'Welcome';
  }

  render() {
    return (
      <div className="has-background-black" id="whole-page">
        <div className="container">
          <div className="section">
            <div>
              <h1 className="m-b-xl title is-1 has-text-centered has-text-white">
                Welcome to mpmamaci.com
              </h1>
              <BottomLinks />
            </div>
            <div className="m-lg">
              <img className="image" src={homePicture} alt="" border="5rem" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
