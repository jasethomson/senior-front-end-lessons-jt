/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {
    this.setState({
      email: event.target.value
    });
  }
  handleSubmit() {
    console.log('state: ', this.state.email);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="email">Email</div>
        <input type="text" value={this.state.email} onChange={this.handleChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
