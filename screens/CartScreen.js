import React from "react";
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,
  Text,
  Image
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View height={30} style={styles.cartListingContainer}>
          <Text>Cart Listing Here</Text>
        </View>
      </ScrollView>
      <View style={styles.checkoutButtonContainer}>
        <Text style={styles.tabBarInfoText}>Checkout goes here</Text>
      </View>
    </View>
  );
}

CartScreen.navigationOptions = {
  title: "Cart"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  cartListingContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  checkoutButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  }
});
