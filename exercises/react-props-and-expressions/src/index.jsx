import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}
const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);

// ReactDOM.render(
//   <CustomButton />,
//   document.getElementById('root')
// );
