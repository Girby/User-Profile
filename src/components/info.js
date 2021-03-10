import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, login, nation } = this.props;
    const { getName } = require("country-list");

    return (
      <div className="user-info pad-sides">
        <span className="user-login">{"@" + login}</span>
        <span className="user-name">
          {name.first} {name.last}
        </span>
        <span className="user-nat">{getName(nation)}</span>
      </div>
    );
  }
}

export default Info;
