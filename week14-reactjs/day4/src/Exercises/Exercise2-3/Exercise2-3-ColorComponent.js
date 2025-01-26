import { Component } from "react";

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
    return null
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

  render() {
    return (
      <>
        {this.state.show && (
          <header>
            <h1>My Favorite Color is {this.state.color}</h1>
            <button onClick={this.FavoriteColor}>Change Color</button>
            <button onClick={this.ShowProperty}>Delete Header</button>
          </header>
        )}
      </>
    );
  }
}

export default Color;
