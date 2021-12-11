import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    if (this.state.count === 0) {
      return <button className="black" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count > 0 && this.state.count < 3) {
      return <button className="blue" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count >= 3 && this.state.count < 6) {
      return <button className="violet" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count >= 6 && this.state.count < 9) {
      return <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count >= 9 && this.state.count < 12) {
      return <button className="red" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count >= 12 && this.state.count < 18) {
      return <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } if (this.state.count >= 18) {
      return <button className="white" onClick={this.handleClick}>Hot Button</button>;
    }

  }
}

ReactDOM.render(<HotButton />, document.querySelector('#root'));
