import React from "react";
import { ScrollView, StyleSheet, Platform, View, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function CartScreen() {
  return (
    <View styles={styles.container}>
      {/* <Text style={styles.textContainer}>Cart listing here</Text> */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.cartListContainer}>
          <Text>Cart listing here</Text>
        </View>
      </ScrollView>
      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Checkout goes here</Text>
      </View> */}
    </View>
  );
}

CartScreen.navigationOptions = {
  title: "Cart"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  contentContainer: {
    paddingTop: 30
  },
  cartListContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  tabBarInfoContainer: {
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
