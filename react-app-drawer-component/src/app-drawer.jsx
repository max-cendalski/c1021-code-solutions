import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darker: false
    };
  }

  render() {
    return (
      <div>
      <i className="fas fa-bars"></i>
      </div>
    );
  }
}
