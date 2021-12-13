import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
      <input type="email" value={this.state.value} onChange={this.handleChange} />
      <button>SignUp</button>
    </form>
    );
  }
}

ReactDOM.render(<NewsLetterForm />, document.querySelector('#root'));
