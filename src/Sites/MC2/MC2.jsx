import React from 'react';
import 'bulma/css/bulma.css';
import './MC2.css';

function Chiffre() {
  return (
    <div className="Chiffre-header section has-background-black has-text-centered">
      <div className="container">
        <h1 className="title is-3 is-spaced has-text-white">MC-2.0 Chiffre</h1>
        <p className="subtitle is-4 has-text-white-ter">
          a low-level string encryption based on vigenere
        </p>
      </div>
      <div className="container section is-medium">
        <div className="columns">
          <div className="column is-half">
            <p className="has-text-white-ter has-text-left subtitle is-5">Enter your text here:</p>
            <textarea className="textarea upperTextbox" type="text" id="input" />
            <p className="has-text-white-ter has-text-left subtitle is-5">Password:</p>
            <input className="input is-primary" type="text" />
            <div className="columns innerColumnsStyle is-mobile">
              <button className="column button is-white is-fullwidth stylesButton" type="button">
                encryption
              </button>
              <button className="column button is-white is-fullwidth stylesButton" type="button">
                decryption
              </button>
            </div>
          </div>
          <div className="column is-half">
            <p className="has-text-white-ter has-text-left subtitle is-5">Result:</p>
            <textarea className="textarea" type="text" id="output" value="" />
          </div>
        </div>
        <div className="section">
          <a
            className="has-text-info has-text-left subtitle is-3"
            href="https://drive.google.com/file/d/12FUF_74zSd7J3KBtSvkC8TGALyL-KMHV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Python Version for File Encryption</u>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Chiffre;
