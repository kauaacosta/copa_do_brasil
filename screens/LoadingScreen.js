import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      
      if (user) {
        this.props.navigation.navigate("Dashboard");
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Carregando oii </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
