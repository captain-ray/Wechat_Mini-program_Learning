# 微信小程序API

## wx.request 

on wx IDE

```js
onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/public/json/db.json', // local node server, open public
      data: {},
      method: 'GET',
      header: {
        'content-type': 'Application/xml'
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
```



  choose to not verify valid domain names, because wx requires HTTPS certificates which is not friendly to developers

------



## wx.uploadFile

on wx IDE

```js
uploadFileBtn: function() {
    wx.chooseImage({
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://192.168.0.183:3000/upload',
          filePath: tempFilePaths[0],
          name: 'swimPoolFile',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            // do something
          }
        })
      },
    })
  },
```



on node Server

```js
const fileUpload = require('express-fileupload') //install express-fileupload
router.use(fileUpload()) 

let fileCounter=0
router.post('/upload',(req,res)=>{
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
      }

    let swimPoolFile=req.files.swimPoolFile // name of the file specified 
    swimPoolFile.mv(`./public/img/file${fileCounter=fileCounter+1}.png`,(err)=>{  // Use the mv() method to place the file somewhere on your server
        if(err) throw err
        res.send('File uploaded')
    })
})
```





## wx.downloadFile

on wx IDE

```html
<!--pages/downloadFile/downloadFile.wxml-->
<image src='{{src}}' style='width:270px;height:126px'></image>
```



```js

onLoad: function(options) {
    let page = this
    wx.downloadFile({
      url: 'http://192.168.0.183:3000/public/img/file1.png', //specify the image path on the server
      success: (res) => {
        console.log(res)
        let tempFilePath = res.tempFilePath
        page.setData({
          src: tempFilePath
        })
      }
    })
  },

```

------

 ## wx--WebsocketAPI

create a dialogue window using websocket



on node server

```js
//download 'ws' using npm, easy way to create a websocket
const WebSocket = require('ws');


// call the Server class
const WebSocketServer = WebSocket.Server;

// instantiation, a websocket needs a port
const wss = new WebSocketServer({
    port: 8080
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('Got you msg!---'+message);
  });
 
});
```



on wx IDE

```html
<!--pages/chatUsingWebSocket/chatUsingWebSocket.wxml-->
<button type='default' bindtap="creatConn">Create Connection</button>
<view class='inputBox'>
  <input type='text' name='msg' bindblur='getMsg' class='input'></input>
  <button type='primary' size='mini' bindtap='send'>Send</button>
</view>

<view class='sendWindow'>
  <view style='font-weight:bold'>Message sent to server</view>
  <block wx:for="{{sendMsg}}">
    <view style='color:green'>{{item}}</view>
  </block>
</view>

<view class='receiveWindow'>
  <view style='font-weight:bold'>Message received from server</view>
  <block wx:for="{{resData}}">
    <view style='color:red'>{{item}}</view>
  </block>
</view>
```

```js
creatConn: function() {

    let page = this
    wx.connectSocket({
      url: 'ws://192.168.0.183:8080/chatServer',
      method: 'GET',
      success: (res) => {
        console.log('Connection created')
        console.log(res)
      }
    })


    wx.onSocketOpen(function(res) {
      page.setData({
        socketOpen: true
      })
      console.log('connection opened')
    })

    wx.onSocketError(function(res) {
      console.log('websocket connection failed')
    })
  },

  send: function() {

    if (this.data.socketOpen) {

      wx.sendSocketMessage({
        data: this.data.msg,
      })
      let sendMsg=this.data.sendMsg
      sendMsg.push(this.data.msg)
      this.setData({sendMsg:sendMsg})
      
      let page=this
      wx.onSocketMessage(function(res){
        let resData=page.data.resData
        resData.push(res.data)
        page.setData({resData:resData})
        console.log(resData)
        console.log('receive data from server '+res.data)
      })

    } else {
      console.log('connection failed, please check')
    }
  },

  getMsg: function(e) {
    var page = this
    page.setData({
      msg: e.detail.value
    })
  },
```

------



## wx-ImageAPI

### Choose Image

on wx IDE

```js
data: {
    img: '',
    imgPaths:[]
  },
  chooseImg: function() {
    let page = this
    let imgPaths=page.data.imgPaths
    wx.chooseImage({
      success: function(res) {
        let filePaths = res.tempFilePaths
        filePaths.forEach((value)=>{
          imgPaths.push(value)
        })
      
        console.log(imgPaths)
        page.setData({
          img: filePaths[0],
          imgPaths:imgPaths
        })
      },
    })
  },
```



### preview Image

on wx IDE

```js
data: {
    img: '',
    imgPaths:[]
  },
      
previewImg:function(){
    let page=this
    wx.previewImage({
      current:page.data.imgPaths[0],
      urls: page.data.imgPaths,
    })
  },
```



------

## wx-Cache

on wx IDE

```js
 saveIntoCache: function() {
    let user1=this.createUser()
    wx.setStorage({
      key: 'user1',
      data: user1,
    })
  },

  getDataFromCache:function(){
    let page=this
    let user=wx.getStorage({
      key: 'user1',
      success: function(res) {
        
        page.setData({
          userInfo:JSON.stringify(res.data)
        })
      },
    })
  },

  
  createUser: () => {
    let user = new Object({
      name: 'Ray',
      age: 10
    })
    return user
  },
```

------

## wx-map

on wx IDE

```html
<!-- map.wxml -->
<map
  id="map"
  longitude="{{currentLongitude}}"
  latitude="{{currentLatitude}}"
  scale="14"
  controls="{{controls}}"
  bindcontroltap="controltap"
  markers="{{markers}}"
  bindmarkertap="markertap"
  polyline="{{polyline}}"
  bindregionchange="regionchange"
  show-location
  style="width: 100%; height: 300px;"
></map>

```

```js
// map.js
Page({
  data: {
    currentLongitude:0,
    currentLatitude:0,
    markers: [{ //标记
      iconPath: '/images/1.jpg',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20
    }],
    polyline: [{ //路线
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#000000DD',
      width: 2,
      dottedLine: true
    }],
   
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
 

 onLoad:function(options){
   console.log('onLoad')
   let page=this
   wx.getLocation({ //get current location
     type:'wgs84',
     success: function(res) {
       let latitude=res.latitude
       let longitude=res.longitude
       console.log(`latitude-${latitude},longitude-${longitude}`)
        page.setData({
          currentLongitude:longitude,
          currentLatitude:latitude
        })
        wx.openLocation({ //open the map provided by the third party
          latitude: latitude,
          longitude: longitude,
        })
     },
   })
 }
})
```

