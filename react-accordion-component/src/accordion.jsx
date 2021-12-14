import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(event.target.value);
  }

  render() {
    return (
      <ul onClick={this.handleClick}>
        {this.props.topics.map(item => <li key={item.header}>{item.header}</li>)}
      </ul>
    );
  }
}
