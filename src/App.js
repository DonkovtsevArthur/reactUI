import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import Form from "./components/Form";

class App extends Component {
  state = {
    mounted: true
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      {
        mounted: false
      }
    );
  };

  render() {
    return (
      <div>
        <Form in={this.state.mounted} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
