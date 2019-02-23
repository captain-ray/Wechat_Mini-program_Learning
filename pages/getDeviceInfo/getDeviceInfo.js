// pages/getDeviceInfo/getDeviceInfo.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '0412837208',
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getNetworkType({
      success: function(res) {
        console.log(res.networkType)
      },
    })

    wx.onAccelerometerChange(function(res){
      console.log(`axis-x ${res.x}`)
      console.log(`axis-y ${res.y}`)
      console.log(`axis-z ${res.z}`)

    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})