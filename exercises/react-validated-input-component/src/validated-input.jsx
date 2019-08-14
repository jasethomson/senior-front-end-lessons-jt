import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit() {
    event.preventDefault();
  }
  render() {
    let statement;
    let symbol;
    if (!this.state.password) {
      symbol = 'fa-times';
      statement = 'A password is required.';
    } else if (this.state.password.length < 8) {
      symbol = 'fa-times';
      statement = 'Your password is too short.';
    } else if (this.state.password.match(/\d/) === null) {
      symbol = 'fa-times';
      statement = 'Your password should have a number.';
    } else if (this.state.password.match(/[A-Z]/) === null) {
      symbol = 'fa-times';
      statement = 'Your password requires a capital letter.';
    } else if (this.state.password.match(/[!@#$%^&*()]/) === null) {
      symbol = 'fa-times';
      statement = 'Your password requires a special letter.';
    } else {
      symbol = 'fa-check';
      statement = '';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="pw">Password</div>
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <i className={`fas ${symbol}`}></i>
        <div className="statement">{statement}</div>
      </form>
    );
  }
}
export default ValidatedInput;
