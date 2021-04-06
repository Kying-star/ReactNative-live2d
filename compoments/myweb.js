/*
 * @Author: your name
 * @Date: 2021-02-11 00:32:23
 * @LastEditTime: 2021-02-11 00:40:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo2/compoments/view.js
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class MyWeb extends Component {
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}

export default MyWeb
