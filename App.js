/*
 * @Author: your name
 * @Date: 2021-01-30 14:39:06
 * @LastEditTime: 2021-04-07 15:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo2/App.js
 */
import React, { Component } from 'react';
import {
   View,
   SafeAreaView,
   Text,Alert,
   TextInput,
   Button,
   StyleSheet,
   ImageBackground
  } from 'react-native';
import { WebView } from 'react-native-webview';
import HttpClient from './utils/server'
const image = { uri: "https://w.wallhaven.cc/full/6k/wallhaven-6kdxex.jpg" };
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      inputTitle:''
    };
    
  }
  getAnswer(){
      let self = this;
      fetch('http://www.tuling123.com/openapi/api', {
        method: 'post',
        body: JSON.stringify({
          key: "d0542def0cb94cc48e4bdd836b25281c",
          info: this.state.inputTitle
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(e =>{
        // Alert.alert(e.text)
        self.setState({
          title:e.text,
        })
      })
    }
  render() {
    return (
      <SafeAreaView>
        <View style={{
          height:"100%",
          width:"100%",
        }}>
          <ImageBackground source={require("./assets/images/bk.jpg")} style={styles.image}>  
            <View style={styles.bubble}>
              <Text style={{
                color:"#ed556a",
                fontSize:20
                }} >{this.state.title}
              </Text>
            </View>       
            <View style={{
              position:"relative",
              top:"-1%",
              height: "60%",
              width: "100%",
              overflow:'hidden',
            }}>
            <WebView style={{
              backgroundColor:"transparent",
              // backgroundColor:"red"
            }} source={{ uri: 'https://kyingstar.com/' }} />
            </View>
            <View>
            <View style={styles.flexRow}>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  this.setState({
                    inputTitle:text
                  })
              }}
              />
              <Button
                onPress={() => {
                  this.getAnswer()
                }}
                title="发送"
              />
            </View>
          </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    )
  }
} 
const styles = StyleSheet.create({
  bubble: {
    position:"relative",
    bottom:"-14%",
    height:"10%",
    margin:20,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius:3,
    padding:5
  },
  flexRow: {
    position:"relative",
    top:"-10%",
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius:3
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  input: {
    height: 40,
    width: 300,
    marginLeft:20,
    borderColor: 'gray', 
    borderWidth: 1,
    borderWidth:0
  }
})