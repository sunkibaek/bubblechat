import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bubble: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    padding: 16,
    marginBottom: 8
  },
  bubbles: {
    flex: 1
  },
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    paddingTop: 100
  },
  defaultBubble: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  profile: {
    backgroundColor: "white",
    borderRadius: 25,
    elevation: 2,
    height: 50,
    marginRight: 8,
    marginBottom: 8,
    width: 50
  },
  tail: {
    elevation: 2,
    position: "absolute",
    left: -11,
    bottom: 10
  },
  tailImage: {
    height: 12,
    width: 12
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.defaultBubble}>
          <View style={styles.profile} />

          <View style={styles.bubbles}>
            <View style={styles.bubble}>
              <Text>Welcome to React Native!</Text>
            </View>

            <View style={styles.bubble}>
              <Text>
                This is an attached bubble. Attached to the top bubble.
              </Text>
            </View>

            <View style={styles.tail}>
              <Image
                source={require("./tail_white_shadow.png")}
                style={styles.tailImage}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
