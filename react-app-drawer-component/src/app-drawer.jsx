import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darker: false,
      overlay: '',
      list: ''

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      darker: !this.state.darker,
      overlay: 'overlay-active',
      list: 'list-container-active'
    });
  }

  render() {
    return (
      <div className="container background-image">
        <div className="row height100">
          <div className={this.state.list}>
          {!this.state.darker
            ? <i className="fas fa-bars cursor-pointer" onClick={this.handleClick}></i>
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
        {this.state.darker &&
        <div className={`overlay-not-active ${this.state.overlay}`} onClick={this.handleClick}></div>
      }
      </div>
    </div>
    );
  }
}
