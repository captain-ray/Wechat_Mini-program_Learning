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

 d