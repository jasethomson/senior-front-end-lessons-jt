import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.myInterval = '';
    this.state = {
      timer: 'off',
      time: 0,
      pause: false
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.timer = this.timer.bind(this);
    this.timeOn = this.timeOn.bind(this);
    this.timeOff = this.timeOff.bind(this);
  }

  handlePlayClick() {
    this.timeOn();

  }

  handlePauseClick() {
    this.timeOff();
    this.setState({
      timer: 'on',
      time: this.state.time + 1,
      pause: false
    });
  }

  handleResetClick() {
    if (!this.state.pause) {
      this.timeReset();
    }
  }

  timer() {
    this.setState({
      timer: 'on',
      time: this.state.time + 1,
      pause: true
    });
  }

  timeOn() {
    this.timeOff();
    this.myInterval = setInterval(this.timer, 1000);
  }

  timeOff() {
    clearInterval(this.myInterval);
  }
  timeReset() {
    this.setState({
      timer: 'on',
      time: 0,
      pause: false
    });
  }

  render() {
    let button;
    if (this.state.pause) {
      button = <i id="pauseButton" onClick={this.handlePauseClick} className="fas fa-pause-circle"></i>;
    } else {
      button = <i id="playButton" onClick={this.handlePlayClick} className="fas fa-play-circle"></i>;
    }
    return (
      <div className="container">
        <div onClick={this.handleResetClick} className="bigC">{this.state.time}</div>
        <div className="buttonContainer">
          {button}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
