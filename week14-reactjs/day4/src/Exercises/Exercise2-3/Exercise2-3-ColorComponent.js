import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.color !== this.state.color) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("After update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  FavoriteColor = () => {
    this.setState({ color: "blue" });
  };

  ShowProperty = () => {
    this.setState({ show: false });
  };
}

export default Color;