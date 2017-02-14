/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AppState
} from 'react-native';

import PushNotification from 'react-native-push-notification'
import BackgroundTimer from 'react-native-background-timer'

import PushController from './app/PushController'

export default class PushNotificationHowTo extends Component {

  constructor(props) {
    super(props);

    this.handleAppStateChanged = this.handleAppStateChanged.bind(this);
    this.state = {
      seconds: 5,
    }
  }

  componentDidMount() {
    //AppState.addEventListener('change', this.handleAppStateChanged);
    // const intervalId = BackgroundTimer.setInterval(() => {
    //   PushNotification.localNotification({
    //     /* Android Only Properties */
    //     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    //     title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
    //     message: "My Notification Message", // (required)
    //     playSound: false, // (optional) default: true
    //   });
    // }, 20000);
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION', notification);
      },
      senderID: "331841847225",
    });
  }

  componentWillUnmount() {
    //AppState.removeEventListener('change', this.handleAppStateChanged);
  }

  handleAppStateChanged(appState) {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (this.state.seconds * 1000)) // in 60 secs
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <PushController />
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
});

AppRegistry.registerComponent('PushNotificationHowTo', () => PushNotificationHowTo);
