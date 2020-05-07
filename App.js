/**
 * Simple App is my first React Native App.
 *
 * @author Omar Barazanji
 * @flow strict-local
 * @date May 2020
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class App extends Component {
  render () {
    return (
      <View>
        <Text>This is my first app</Text>
      </View>
    ) // no semi-colon when in class component, only in functional component.
  }
}


export default App;
