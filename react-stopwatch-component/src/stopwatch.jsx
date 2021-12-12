import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: true
    };
  }

  render() {
    return (
      <div>
        <div className="row">
        <div className="circle-container">
          <div className="circle">
            <div className="stop-watch">
              <h2>6</h2>
            </div>
          </div>
        </div>
        <div className="icon">
        </div>
        </div>
      </div>
    );

  }
}

export default Stopwatch;
