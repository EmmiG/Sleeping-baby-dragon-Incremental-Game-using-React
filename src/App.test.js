/*Ifall vi ska köra någon typ av test som är relaterat till det här/ if you shall run any kind of test that is related to this*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
