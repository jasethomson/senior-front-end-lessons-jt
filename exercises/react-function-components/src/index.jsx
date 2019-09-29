import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}
ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
