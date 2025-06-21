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