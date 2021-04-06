/*
 * @Author: your name
 * @Date: 2021-04-05 21:11:17
 * @LastEditTime: 2021-04-06 13:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo2/utils/server.js
 */
let data = {
  "key":"d0542def0cb94cc48e4bdd836b25281c",
  "info":"你好"
}
const HttpClient = {
  requestAsync:function(url , callback){
    fetch(url,{
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json() )
    .then((responseJson)=>{
      callback.call(this,responseJson);
    })
    .catch((error)=>{
      console.error(error);
    });
  }
}

export default HttpClient;