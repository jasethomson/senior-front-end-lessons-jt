import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  render() {
    return (
      <button onClick={this.handleClick} className={this.className()}>Hot Button</button>
    );
  }
  className() {
    if (this.state.clicks < 4) {
      return 'threeClicks';
    } else if (this.state.clicks < 7) {
      return 'sixClicks';
    } else if (this.state.clicks < 10) {
      return 'nineClicks';
    } else if (this.state.clicks < 13) {
      return 'twelveClicks';
    } else if (this.state.clicks < 16) {
      return 'fifteenClicks';
    } else {
      return 'eighteenClicks';
    }
  }
}
export default HotButton;
