/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Player } from 'react-native-audio-stream';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Qwetu Radio!</Text>
        <Text style={styles.instructions}>This is a test app for streaming services on Qwetu</Text>
        {/* <Player url={" https://stream.radiojar.com/2zyh3gv2zceuv.mp3"} /> */}
        <Player url={"http://ample-09.radiojar.com/2zyh3gv2zceuv.mp3"} />
        {/* <Player url={"http://lacavewebradio.chickenkiller.com:8000/stream.mp3"} /> */}
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