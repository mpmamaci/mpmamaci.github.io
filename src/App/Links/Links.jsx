import React from 'react';
import 'bulma/css/bulma.css';
import '../../utils/spacing.scss';
import '../../utils/helpers.scss';
import './Links.scss';

const BottomLinksClasses = 'btn column card is-centered m-md';

const BottomLinks = () => (
  <div className="columns">
    {/*<a className={BottomLinksClasses} href="#/">
      Home
    </a>
     <a className={BottomLinksClasses} href="#/pomodoro">
            Pomodoro Timer
      </a>*/}
    <a className={BottomLinksClasses} href="#/passwd">
      Passwort Generator
    </a>
    <a className={BottomLinksClasses} href="#/mc2">
      Advanced Vigenere
    </a>
  </div>
);

export default BottomLinks;
export { BottomLinksClasses };
