import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      check: false,
      detailsContainer: 'details-container'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const topics = this.props.topics;
    const element = event.target.textContent;
    if (this.state.check === true) {
      this.setState({
        check: false
      });
    } else {
      for (var i = 0; i < topics.length; i++) {
        if (this.props.topics[i].header === element) {
          this.setState({
            index: i,
            check: true
          });
        }
      }
    }
  }

  render() {
    let detail = this.state.detailsContainer;
    return (
      <ul onClick={this.handleClick}>
        {this.props.topics.map((item, index) => {
          if (index === this.state.index && this.state.check === true) {
            detail = 'details-container-visible';
          } else {
            detail = 'details-container';
          }
          return (
            <li key={index}>
              <div className='header-container'>{item.header}</div>
              <div className={detail}>{item.details}</div>
            </li>
          );
        })
        }
     </ul>
    );
  }
}
