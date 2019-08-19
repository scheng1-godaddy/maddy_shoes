import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { View, Text, Image, StyleSheet } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";

export default function DetailsScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  const { navigation } = props;
  return (
    <Container>
      <Content>
        <Image
          source={navigation.getParam("image", "NA")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {navigation.getParam("title", "title")}
          </Text>
          <Text style={styles.subTitle}>
            {navigation.getParam("subTitle", "Sub Title")}
          </Text>
          <Text style={styles.description}>
            {navigation.getParam("description", "description")}
          </Text>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: 250,
    marginTop: 10
  },
  titleContainer: {
    padding: 30
  },
  title: {
    color: "#8c8c8c",
    fontSize: 32
  },
  subTitle: {
    color: "#8c8c8c"
  },
  description: {
    color: "#8c8c8c",
    paddingTop: 25,
    paddingBottom: 25
  }
});

DetailsScreen.navigationOptions = {
  title: "Details"
};
