import React from '../node_modules/react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'off'
    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    if (this.state.toggle === 'off') {
      this.position = 'on';
    } else {
      this.position = 'off';
    }
    this.setState({ toggle: this.position });
  }
  render() {
    return (
      <div className={this.backgroundColorClass()}>
        <div onClick={this.handleClick} className={this.clickedClass()}></div>
      </div>
    );
  }
  backgroundColorClass() {
    if (this.state.toggle === 'off') {
      return 'moneyTime';
    } else {
      return 'grayTime';
    }
  }
  clickedClass() {
    if (this.state.toggle === 'off') {
      return 'circle clicked';
    } else {
      return 'circle';
    }
  }
}

export default ToggleSwitch;
