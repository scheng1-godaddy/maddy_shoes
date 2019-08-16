import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, Text } from "react-native";
import { Container, Content, Card, CardItem, Body } from "native-base";

export default function BrowseScreen() {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>Hello</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
