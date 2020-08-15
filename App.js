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
  ScrollView,
  Image,
} from 'react-native';


class App extends Component {

  render () {
    const name = "Omar";

    const testFunction = (param1, param2) => {
      return param1 + " " + param2
    }

    const CustomComponent = (props) => {
      return (
        <View>
          <Text>Props are {props.name}!</Text>
        </View>
      );  // semi-colon because function component!
    }

    return (
      <ScrollView>
          <Text>Hello, my name is {name}!</Text>
          <Text>This is my first React Native app.</Text>
          <Text>I will document my learning progress here!</Text>
          <Image
            source = {{
              uri: 'http://www.pngmart.com/files/10/Thumbs-UP-PNG-Transparent-Image.png',
            }}
            style = {{ width: 200, height: 200 }}
          />
          <Text>This is {testFunction("how you call", "a function (see code)")}</Text>
          <Text>Notice that when you call Javascript, you put it inside curly braces.</Text>
          <Text>That is how JSX works!</Text>
          <Text>Below is some custom component fun (with props)</Text>
          <CustomComponent name="COOL" />
          <CustomComponent name="DOPE" />
          <CustomComponent name="WHAT'S UP" />
          <Text>See code to explain the above...</Text>
      </ScrollView>
    ) // no semi-colon when in class component, only in functional component.
  }
}


export default App;
