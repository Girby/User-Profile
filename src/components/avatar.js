import React, { Component } from "react";
// import { FiEdit } from "react-icons/fi";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { thumbnail, name, status } = this.props;
    return (
      <div className="user-thumb">
        <img src={thumbnail} alt={name.first + " " + name.last} />
        <div className="user-status">
          <div className={"user-status-online " + status} />
          <div className="user-tooltip">{status}</div>
        </div>
      </div>
    );
  }
}

export default Avatar;
