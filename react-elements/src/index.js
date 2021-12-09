import React from 'react';
import ReactDOM from 'react-dom';

var hello = React.createElement(
  'h1',
  null,
  'Hello React!'
);

ReactDOM.render(hello, document.querySelector('#root'));
