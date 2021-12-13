import React from 'react';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      switch: !this.state.switch
    });
  }

  render() {
    if (this.state.switch === false) {
      return <div className="row">
        <div className="switch-container">
          <div className="switch switch-left" onClick={this.handleClick}>
            <div className="circle-left"></div>
          </div>
        </div>
        <h2>OFF</h2>
      </div>;
    } else {
      return <div className="row">
       <div className="switch-container">
          <div className="switch switch-right" onClick={this.handleClick}>
            <div className="circle-right"></div>
          </div>
        </div>
        <h2>ON</h2>
      </div>;
    }
  }
}

export default SwitchButton;

/* class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getSwitchPosition() {
    if (this.state.switch === false) {
      return 'switch-left';
    }
    return 'switch-right';
  }

  handleClick() {
    this.setState({
      switch: !this.state.switch
    });
  }

  render() {
    const switchPosition = this.getSwitchPosition();
    return <div className="row">
            <div className="switch-container">
              <div className={`switch ${switchPosition}`} onClick={this.handleClick}>
                {!this.state.switch
                  ? <div className="circle-left"></div>
                  : <div className="circle-right"></div>
                }
              </div>
              </div>
                {!this.state.switch
                  ? <h2>OFF</h2>
                  : <h2>ON</h2>
                }
            </div>;
  }
} */
