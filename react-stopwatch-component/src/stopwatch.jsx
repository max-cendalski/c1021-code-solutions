import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      icon: '../src/icons/play-solid.svg',
      time: 0
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleTimer() {
    if (this.state.timer === false) {
      this.setState({
        timer: !this.state.timer
      });
      this.timerId = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        });
      }, 1000);
    } else {
      clearInterval(this.timerId);
      this.setState({
        timer: !this.state.timer,
        icon: '../src/icons/play-solid.svg'
      });
    }
  }

  handleButton() {
    if (this.state.timer === false) {
      this.handleTimer();
      this.setState({
        icon: '../src/icons/pause-solid.svg',
        timer: true

      });
    } else {
      this.handleTimer(clearInterval(this.timerId));
      this.setState({
        timer: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="circle-container" onClick={this.handleTimer}>
            <div className="circle">
              <div className="stop-watch">
                <h2>{this.state.time}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={this.state.icon} onClick={this.handleButton} />
        </div>
      </div>
    );
  }
}

export default Stopwatch;

/* getTemperatureClass() {
    const { clicks } = this.state;
    if (clicks < 4) return 'cold';
    if (clicks < 7) return 'cool';
    if (clicks < 10) return 'tepid';
    if (clicks < 13) return 'warm';
    if (clicks < 16) return 'hot';
    return 'nuclear';
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    const temperatureClass = this.getTemperatureClass();
    return (
      <button
        onClick={this.handleClick}
        className={`hot-button ${temperatureClass}`}>
        { this.props.label }
      </button>
    );
  }
} */
