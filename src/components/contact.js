import React, { Component } from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { email, phone } = this.props;

    return (
      <div className="user-contact">
        <span className="user-contact-info">
          <FiMail />
          <a href={"mailto:" + email}>{email}</a>
        </span>
        <span className="user-contact-info">
          <FiPhone />
          <a href={"tel:" + phone}>{phone}</a>
        </span>
      </div>
    );
  }
}

export default Bio;
