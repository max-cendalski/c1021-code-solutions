import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: '../src/icons/play-solid.svg',
      time: 0
    };
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
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
          <img src={this.state.icon} />
        </div>
      </div>
    );
  }
}

export default Stopwatch;
