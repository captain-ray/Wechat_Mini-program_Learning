// pages/imageAPI/imageAPI.js
Page({

  /**
   * Page initial data
   */
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

  previewImg:function(){
    let page=this
    wx.previewImage({
      current:page.data.imgPaths[0],
      urls: page.data.imgPaths,
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