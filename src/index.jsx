import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './App/App';
import * as serviceWorker from './service/serviceWorker';

// eslint-disable-next-line no-undef
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
