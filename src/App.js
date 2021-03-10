import React, { Component } from "react";
import User from "./components/user";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {},
      status: ""
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results[0],
            status: this.generateStatus()
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  

  generateStatus() {
    var gen = Math.floor(Math.random() * 4 + 1);
    switch (gen) {
      case 1:
        return "online";
      case 2:
        return "offline";
      case 3:
        return "away";
      case 4:
        return "busy";
      default:
        break;
    }
  }

  render() {
    const { error, isLoaded, items, status } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <User user={items} status={status} />;
    }
  }
}

export default App;
