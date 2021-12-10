import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
    <div>
      {!this.state.isClicked
        ? <button onClick={this.handleClick}>Click me!</button>
        : <button onClick={this.handleClick}>Thanks!</button>
        }
    </div>
    );
  }
}

ReactDOM.render(<CustomButton />, document.querySelector('#root'));
