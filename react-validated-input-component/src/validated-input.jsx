import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      check: false,
      message: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    const { password } = this.state;
    if (password.length < 8 && password.length > 0) {
      this.setState({ message: 'Your password is too short' });
    } else if (password.length >= 8) {
      this.setState({ message: '', check: true });
    }
  }

  handleChange() {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="password" onChange={this.handleChange}></input>
        {(!this.state.check) ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i> }
        </form>
        <h4 className="textContainer">{this.state.message}</h4>
      </div>

    );
  }
}
