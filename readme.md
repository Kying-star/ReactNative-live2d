# 基于ReactNative+live2d实现可爱的聊天机器人

## 运行

安装依赖

```js
npm install
or
yarn
```

运行

```js
yarn ios
```

## 技术栈

- ReactNative
- Live2D

## 技术概括

### ReactNative

由Facebook 在 2015 开源的 React Native，可以使用 React 来创建 Android 和 iOS 的原生应用

#### 性能

ReactNative将 React 基础抽象组件渲染为原生平台UI组件，每个视图和原生应用都别无二致。

**流水的多平台**，铁打的 React。

#### 无缝跨平台

一套ReactNative可以可以同时生成ios和android原生应用。

#### 秒速刷新

借助 JavaScript 的动态特性， React Native 能够做到光速迭代。

### live2d

《Live2D》是一种应用于电子游戏的绘图渲染技术，技术由日本Cybernoids公司开发。

通过一系列的连续图像和人物建模来生成一种类似三维模型的二维图像.

本项目没有直接讲live2d导入项目，而是使用webview加载线上的live2d模型，来自游戏[药水制作师](https://baike.baidu.com/item/%E8%8D%AF%E6%B0%B4%E5%88%B6%E4%BD%9C%E5%B8%88)开源的live2d模型。

线上的模型部署在腾讯云服务器，直接访问网址https://kyingstar.com/

<img src="/Users/kying-star/Library/Application Support/typora-user-images/image-20210408105857488.png" alt="image-20210408105857488" style="zoom:25%;" />

## 项目目录结构

总体文件

```js
.
├── App.js // 项目入口
├── __tests__
├── android //打包的安卓包
├── app.json //app配置
├── assets // 静态图片资源
├── babel.config.js //编译配置
├── compoments //组件
├── index.js //导入项目文件
├── ios //打包的ios包
├── metro.config.js
├── node_modules //依赖包
├── package.json //依赖包管理文件
├── readme.md //项目说明文档
├── utils //工具类
└── yarn.lock //包依赖管理
```

## 核心代码

```js
/*
 * @Author: kyingstar
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
```



## 项目预览

### 项目logo，一位机械少女

![image-20210408000014766](/Users/kying-star/Library/Application Support/typora-user-images/image-20210408000014766.png)

### 项目名: [ Ella ]

ELLa(艾拉)出自日本动漫[可塑性记忆](https://baike.baidu.com/item/%E8%89%BE%E6%8B%89/17007090?fr=aladdin)，动漫讲述了一段主人公与机器少女相知相识再分别的故事。

![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201906%2F21%2F20190621110339_JsWNV.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620403880&t=4bfb0b9669150d89ad782161b1a8f7a3)

### 项目截图

**测试打招呼**

<img src="/Users/kying-star/Library/Application Support/typora-user-images/image-20210408195853581.png" alt="image-20210408195853581" style="zoom:25%;" />

**测试询问时间**

<img src="/Users/kying-star/Library/Application Support/typora-user-images/image-20210408204321928.png" alt="image-20210408204321928" style="zoom:25%;" />

**测试询问天气**

<img src="/Users/kying-star/Library/Application Support/typora-user-images/image-20210408204535048.png" alt="image-20210408204535048" style="zoom:25%;" />

**测试数学计算**

<img src="/Users/kying-star/Library/Application Support/typora-user-images/image-20210408204642100.png" alt="image-20210408204642100" style="zoom:25%;" />

## 后端支持

**图灵机器人**

http://www.turingapi.com/

**输入格式**

```js
{
  "key":"XXXXXXX",
  "info":"hello"
}
```

**回调参数**

```js
{
    "code": 100000,
    "text": "你好喵～"
}
```

**支持功能** 

- [x] 数字计算
- [x] 说笑话
- [x] 讲故事
- [x] 成语接龙
- [x] 星座运势
- [x] 脑筋急转弯
- [x] 歇后语
- [x] 绕口令
- [x] 聊天对话
- [x] 天气查询
- [x] 问菜谱
- [x] 快递查询
- [x] 列车查询
- [x] 日期查询
- [x] 城市邮编

## github

https://github.com/Kying-star/ReactNative-live2d

