import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import PushController from "./PushController";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <PushController
          onChangeToken={token => this.setState({token: token || ""})}
        />
        <Text style={styles.welcome}>
          Welcome to Simple Fcm Client!
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "teal",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    backgroundColor: "transparent"
  },
});
