import React from 'react';
import 'bulma/css/bulma.css';

function Header() {
  return (
    <div className="container">
      <h1 className="title is-3 is-spaced has-text-white">MC-2.0 Cipher</h1>
      <p className="subtitle is-4 has-text-white-ter">
        a low-level string encryption based on vigenere
      </p>
    </div>
  );
}

function PythonLink() {
  return (
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
  );
}

export { PythonLink, Header };
