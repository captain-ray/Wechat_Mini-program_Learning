// pages/chatUsingWebSocket/chatUsingWebSocket.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: '',
    socketOpen: false,
    sendMsg:[],
    resData:[]
  },


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
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})