// pages/upload/upload.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
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