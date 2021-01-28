import React, { Component } from 'react';
import '../MC2/MC2.css';
import '../../App/Links/Links.scss';
import 'bulma/css/bulma.css';
import '../../utils/helpers.scss';
import '../../utils/spacing.scss';

function generatePasswd(length, specialCharacters) {
  if (length > 150) {
    length = 150;
    alert('Max Password Size is 150');
  }
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  if (specialCharacters) {
    characters = characters.concat(',.:-_#+~<>!§$%&(){}=?@');
  }

  characters = characters
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');
  console.log(characters);
  let result = '';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

class PasswordGenerator extends Component {
  state = { specialCharacters: false, passwdLength: 16, passwdField: '' };

  Header = () => {
    return (
      <div className="container">
        <h1 className="title is-3 is-spaced has-text-white">Password Generator</h1>
        <p className="subtitle is-4 has-text-white-ter">generate a password inside your browser</p>
      </div>
    );
  };

  handleChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleButtonClick = event => {
    if (this.state.passwdLength === 0 || this.state.passwdLength < 0) {
      return;
    }
    const newPasswd = generatePasswd(this.state.passwdLength, this.state.specialCharacters);
    this.setState({ passwdField: newPasswd });
  };

  TextFields = () => (
    <div className="columns">
      <div className="column is-half">
        <div
          className="is-centered"
          style={{
            marginLeft: '2rem'
          }}
        >
          <input
            type="checkbox"
            name="specialCharacters"
            value={this.state.specialCharacters}
            onChange={this.handleChangeCheckbox}
          />
          <span className="has-text-white-ter has-text-left subtitle is-5 m-md">
            Include special Characters
          </span>
        </div>
        <div className="is-centered">
          <span className="has-text-white-ter has-text-left subtitle is-5 m-md">Length</span>
          <input
            className="is-size-5"
            style={{ width: '4rem' }}
            type="number"
            name="passwdLength"
            value={this.state.passwdLength}
            onChange={this.handleChange}
          />
        </div>
        <div className="columns innerColumnsStyle is-mobile">
          <button
            name="generate"
            onClick={this.handleButtonClick}
            className="column button is-white is-fullwidth stylesButton"
            type="button"
          >
            generate
          </button>
        </div>
      </div>
      <div className="column is-half m-lg">
        <p className="has-text-white-ter has-text-left subtitle is-5">Password:</p>
        <textarea value={this.state.passwdField} className="textarea" type="text" readOnly />
      </div>
    </div>
  );

  render() {
    const BottomLinksClasses = 'btn column card is-centered m-lg';
    return (
      <div className="cipher-header section has-background-black has-text-centered">
        {this.Header()}
        <div className="container section is-medium">
          <div>{this.TextFields()}</div>
          <a className={BottomLinksClasses} href="#/mc2">
            Advanced Vigenere
          </a>
        </div>
      </div>
    );
  }
}

export default PasswordGenerator;
