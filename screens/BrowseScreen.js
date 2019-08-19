import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BrowseScreen(props) {
  const inventory = [
    {
      id: 1,
      title: "Kyrie Irving IV",
      subTitle: "Nike Special Edition",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam harum fugit ut itaque, quod vitae, doloremque, voluptatibus ex exercitationem magni tempore nihil. Consequuntur, amet? Fuga quasi fugiat adipisci tempora reprehenderit.",
      image: require("../assets/images/kyrie_shoes.jpeg"),
      price: 249
    },
    {
      id: 2,
      title: "Eric Koston Jordan's",
      subTitle: "Nike SB | Air Jordan",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam harum fugit ut itaque, quod vitae, doloremque, voluptatibus ex exercitationem magni tempore nihil. Consequuntur, amet? Fuga quasi fugiat adipisci tempora reprehenderit.",
      image: require("../assets/images/koston.jpg"),
      price: 420
    },
    {
      id: 3,
      title: "Air Force 1",
      subTitle: "Custom",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam harum fugit ut itaque, quod vitae, doloremque, voluptatibus ex exercitationem magni tempore nihil. Consequuntur, amet? Fuga quasi fugiat adipisci tempora reprehenderit.",
      image: require("../assets/images/af1.jpeg"),
      price: 378
    }
  ];
  return (
    <Container>
      <Content>
        {inventory.map(item => {
          return (
            <Card key={item.id}>
              <TouchableOpacity
                onPress={() => props.navigation.push("Details", item)}
              >
                <CardItem style={styles.titleContainer}>
                  <View style={styles.titleInnerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                  </View>
                </CardItem>
                <CardItem cardBody style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                </CardItem>
              </TouchableOpacity>
              <CardItem style={styles.cartButtonContainer}>
                <Text
                  style={styles.pricing}
                >{`$${item.price.toString()}`}</Text>
                <Button
                  type="outline"
                  icon={
                    <Icon name="shopping-cart" size={12} color={"#a3a3a3"} />
                  }
                  title=" Add"
                  titleStyle={styles.cartButtonTextStyle}
                  onPress={() => props.navigation.push("Cart", item)}
                />
              </CardItem>
            </Card>
          );
        })}
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
    width: 350,
    height: 150
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
