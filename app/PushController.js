import React, {
  Component
} from 'react';

import PushNotification from 'react-native-push-notification'

export default class PushController extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    PushNotification.configure({
      onRegister: function(token) {
        console.log( 'TOKEN:', token );
      },
      senderID: "<SENDER_ID>",
      onNotification: function(notification) {
        console.log('NOTIFICATION', notification);
        PushNotification.localNotification({
          vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
          title: notification.title, // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
          message: notification.message, // (required)
          playSound: false, // (optional) default: true
        });
      },
    });
  }

  render() {
    return null;
  }

}
