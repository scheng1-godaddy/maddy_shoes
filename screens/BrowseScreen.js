import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BrowseScreen() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem style={styles.titleContainer}>
            <View style={styles.titleInnerContainer}>
              <Text style={styles.title}>Kyrie Irving IV</Text>
              <Text style={styles.subTitle}>Special Edition</Text>
            </View>
          </CardItem>
          <CardItem cardBody style={styles.imageContainer}>
            <Image
              source={require("../assets/images/kyrie_shoes.jpeg")}
              style={styles.image}
            />
          </CardItem>
          <CardItem style={styles.cartButtonContainer}>
            <Text style={styles.pricing}>$249</Text>
            <Button
              type="outline"
              icon={<Icon name="shopping-cart" size={12} color={"#a3a3a3"} />}
              title=" Add"
              titleStyle={styles.cartButtonTextStyle}
            />
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#8c8c8c",
    fontSize: 18
  },
  subTitle: {
    color: "#b0b0b0",
    fontSize: 12
  },
  titleContainer: {
    borderBottomColor: "#ededed",
    borderBottomWidth: 1
  },
  titleInnerContainer: {
    paddingVertical: 10
  },
  image: {
    width: 260,
    height: 160
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  cartButtonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#ededed",
    borderTopWidth: 1
  },
  cartButtonTextStyle: {
    fontSize: 12,
    color: "#a3a3a3"
  },
  pricing: {
    fontSize: 14,
    color: "#40addb"
  }
});
