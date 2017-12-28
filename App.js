import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Dimensions, TextInput
} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;
export default class LearnRN extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TextInput style={styles.textInputStyle}
            placeholder={'请输入手机号'} />
          <Text style={styles.textPromptStyle}>
            您输入的手机号：
          </Text>
          <TextInput style={styles.textInputStyle}
            placeholder={'请输入密码'}
            password={true}/>
          <Text style={styles.bigTextPrompt}>
            确定
          </Text>
        </View>
      );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'grey',
    fontSize: 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});

// AppRegistry.registerComponent('LeanrRN', () => LearnRN);