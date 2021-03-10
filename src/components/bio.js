import React, { Component } from "react";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { thumbnail, name } = this.props;
    return (
      <div className="user-bio pad-sides">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apparet
          statim, quae sint officia, quae actiones. Ad eos igitur converte te,
          quaeso. Quid est igitur, cur ita semper deum appellet Epicurus beatum
          et aeternum?
        </p>
      </div>
    );
  }
}

export default Bio;
