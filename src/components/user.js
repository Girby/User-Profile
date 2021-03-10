import React, { Component } from "react";
import Avatar from "../components/avatar";
import Info from "../components/info";
import Contact from "../components/contact";
import Bio from "../components/bio";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, status } = this.props;
    // Check for full API data
    // console.log(user);

    function newUser() {
      window.location.reload();
    }

    return (
      <div className="user-interface">
        <div className="user-welcome">
          <h1>React JS User Interface</h1>
        </div>
        <div className="user-profile">
          <div className="user-refresh" onClick={newUser}>
            <div className="user-tooltip">Refresh</div>
          </div>
          <Avatar
            thumbnail={user.picture.large}
            name={user.name}
            status={status}
          />
          <Info
            name={user.name}
            login={user.login.username}
            nation={user.nat}
          />
          <Contact email={user.email} phone={user.phone} />
          <Bio />
        </div>
      </div>
    );
  }
}

export default User;
