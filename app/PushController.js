import React, {
  Component
} from 'react';

import PushNotification from 'react-native-push-notification'

export default class PushController extends Component {

  componentDidMount() {
    PushNotification.configure({
      senderID: "331841847225",
      onNotification: function(notification) {
        console.log('NOTIFICATION', notification);
      },
    })
  }

  render() {
    return null;
  }

}
