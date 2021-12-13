import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timerOn: false
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    if (this.state.timerOn === false) {
      this.setState({
        timerOn: !this.state.timerOn
      });
      this.timerId = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        });
      }, 1000);
    } else {
      clearInterval(this.timerId);
      this.setState({
        timerOn: !this.state.timerOn
      });
    }
  }

  handleTimer() {
    if (this.state.time > 0) {
      clearInterval(this.timerId);
      this.setState({
        timerOn: false,
        time: 0
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
         { !this.state.timerOn
           ? <img src='../src/icons/play-solid.svg' onClick={this.handleButton}/>
           : <img src='../src/icons/pause-solid.svg' onClick={this.handleButton}/>
          }
        </div>
      </div>
    );
  }
}

export default Stopwatch;
