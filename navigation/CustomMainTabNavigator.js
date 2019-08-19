import React from "react";
import MainTabNavigator from "./MainTabNavigator";

class CustomMainTabNavigtor extends React.Component {
  static router = MainTabNavigator.router;

  state = {
    cart: []
  };

  addToCart = item => {
    const { cart } = this.state;
    this.setState({ cart: [...cart, item] });
  };

  render() {
    const { cart } = this.state;
    return (
      <MainTabNavigator
        navigation={this.props.navigation}
        screenProps={{ cart: cart, addToCart: this.addToCart }}
      />
    );
  }
}

export default CustomMainTabNavigtor;
