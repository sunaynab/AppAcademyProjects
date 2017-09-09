import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

const names = [
  "Andres",
  "Adam",
  "Bob",
  "Cathy",
  "Dom",
  "Edward",
  "Francine",
  "Gretchen",
  "Jaime",
  "Jonas",
  "Molly",
  "Ingrid",
  "Linda",
  "Owen",
  "Quentin",
  "Ross",
  "Urkel",
  "Val",
  "Zach"
];


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
