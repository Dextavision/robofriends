import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { requestRobots, setSearchField } from "../actions";
import MainPage from "../components/MainPage";

// Tell me to what state i need listening to and send it down as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

// Tell me what props i need to listen to that are actions i need to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
