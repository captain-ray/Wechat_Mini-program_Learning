// pages/downloadFile/downloadFile.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    let page = this
    wx.downloadFile({
      url: 'http://192.168.0.183:3000/public/img/file1.png',
      success: (res) => {
        console.log(res)
        let tempFilePath = res.tempFilePath
        page.setData({
          src: tempFilePath
        })
      }
    })
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