import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darker: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      darker: !this.state.darker
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {!this.state.darker
            ? <i className="fas fa-bars" onClick={this.handleClick}></i>
            : <ul>
                <h4>Choose your game</h4>
                <li onClick={this.handleClick}>The Legend Of Zelda</li>
                <li onClick={this.handleClick}>A Link to the Past</li>
                <li onClick={this.handleClick}>Ocarina of Time</li>
                <li onClick={this.handleClick}>The Wind Waker</li>
                <li onClick={this.handleClick}>Breath of the Wild</li>
            </ul>
          }
        </div>
      </div>
    );
  }
}
