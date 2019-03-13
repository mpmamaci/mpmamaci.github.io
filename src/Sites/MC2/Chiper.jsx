import React, { Component } from 'react';
import { encode, decode } from './functions/cipherFunctions';
import { PythonLink, Header } from './components/StatelessComponents';
import { BottomLinks } from '../../App/App';
import 'bulma/css/bulma.css';
import './MC2.css';

class Cipher extends Component {
  state = {
    inputField: '',
    outputField: '',
    passwordField: ''
  };

  componentDidMount() {
    document.title = 'MC-2 Cipher';
  }

  handleChange = (event, field) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleButtonClick = event => {
    if (event.target.name === 'encryption') {
      this.setState({ outputField: encode(this.state.inputField, this.state.passwordField) });
    } else if (event.target.name === 'decryption') {
      this.setState({ outputField: decode(this.state.inputField, this.state.passwordField) });
    }
  };

  TextFields = () => (
    <div className="columns">
      <div className="column is-half">
        <p className="has-text-white-ter has-text-left subtitle is-5">Enter your text here:</p>
        <textarea
          name="inputField"
          value={this.state.inputField}
          onChange={this.handleChange}
          className="form-control textarea upperTextbox"
        />
        <p className="has-text-white-ter has-text-left subtitle is-5">Password:</p>
        <input
          name="passwordField"
          value={this.state.passwordField}
          onChange={this.handleChange}
          className="input is-primary"
          type="text"
        />
        <div className="columns innerColumnsStyle is-mobile">
          <button
            name="encryption"
            onClick={this.handleButtonClick}
            className="column button is-white is-fullwidth stylesButton"
            type="button"
          >
            encryption
          </button>
          <button
            name="decryption"
            onClick={this.handleButtonClick}
            className="column button is-white is-fullwidth stylesButton"
            type="button"
          >
            decryption
          </button>
        </div>
      </div>
      <div className="column is-half">
        <p className="has-text-white-ter has-text-left subtitle is-5">Result:</p>
        <textarea value={this.state.outputField} className="textarea" type="text" readOnly />
      </div>
    </div>
  );

  render() {
    return (
      <div className="cipher-header section has-background-black has-text-centered">
        <Header />
        <div className="container section is-medium">
          <div>{this.TextFields()}</div>
          <PythonLink />
          <BottomLinks />
        </div>
      </div>
    );
  }
}

export default Cipher;
