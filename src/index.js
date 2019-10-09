import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', {scope: '/'})
//     .then(function(reg) {
//       // registration worked
//       console.log('Registration succeeded. Scope is ' + reg.scope);
//     }).catch(function(error) {
//       // registration failed
//       console.log('Registration failed with ' + error);
//     });
//   }