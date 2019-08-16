import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import BrowseScreen from "../screens/BrowseScreen";
import CartScreen from "../screens/CartScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const BrowseStack = createStackNavigator(
  {
    Browse: BrowseScreen
  },
  config
);

BrowseStack.navigationOptions = {
  tabBarLabel: "Browse",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-eye` : "md-eye"}
    />
  )
};

BrowseStack.path = "";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

CartStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  BrowseStack,
  CartStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
