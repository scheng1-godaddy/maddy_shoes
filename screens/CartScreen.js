import React from "react";
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CartScreen(props) {
  const { cart, addToCart } = props.screenProps || {
    cart: null,
    addToCart: () => null
  };
  return (
    // <View style={styles.container}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}
    //   >
    //     <View height={30} style={styles.cartListingContainer}>
    //       <Text>Cart Listing Here</Text>
    //     </View>
    //   </ScrollView>
    //   <View style={styles.checkoutButtonContainer}>
    //     <Text style={styles.tabBarInfoText}>Checkout goes here</Text>
    //   </View>
    // </View>
    <Container>
      <Content>
        {cart.map(item => {
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
        <View style={styles.checkoutButtonContainer}>
          <Text style={styles.tabBarInfoText}>Checkout goes here</Text>
        </View>
      </Content>
    </Container>
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
